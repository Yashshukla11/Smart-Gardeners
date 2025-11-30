from fastapi import FastAPI
from langserve import add_routes
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableLambda
from langchain_core.output_parsers import StrOutputParser
from pydantic import BaseModel, Field
from typing import Dict, Any, List
import os
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_openai import OpenAIEmbeddings
from qdrant_client import QdrantClient
from langchain_qdrant import QdrantVectorStore
from utils.utils import retrieve

# Load .env file if it exists (for local development)
# On Vercel, environment variables are set directly, so this is optional
try:
    load_dotenv()
except Exception:
    pass  # Ignore if .env file doesn't exist (normal on Vercel)

# ------------------------------------------------------
# Input/Output Schemas
# ------------------------------------------------------
class ChainInput(BaseModel):
    question: str = Field(description="The user's question to ask the chatbot")
    history: List[Dict[str, Any]] = Field(
        default_factory=list,
        description="Optional conversation history as list of objects with 'role' and 'content' keys"
    )
    
    model_config = {
        "json_schema_extra": {
            "example": {
                "question": "What is hydroponics?",
                "history": []
            }
        }
    }

class ChainOutput(BaseModel):
    answer: str = Field(description="The chatbot's response")

# ------------------------------------------------------
# FastAPI App
# ------------------------------------------------------
app = FastAPI(
    title="Smart Gardeners Chatbot",
    version="1.0.0",
    description="Smart Gardeners chatbot chain with RAG using Qdrant vector store"
)

# ------------------------------------------------------
# Load Qdrant connection
# ------------------------------------------------------
_vector_store = None
_llm = None

def get_vector_store():
    global _vector_store
    if _vector_store is None:
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY environment variable is not set")
        
        embedding = OpenAIEmbeddings(
            model="text-embedding-3-small",
            api_key=api_key,
        )

        qdrant_url = os.getenv("QDRANT_URL")
        qdrant_api_key = os.getenv("QDRANT_API_KEY")
        qdrant_collection = os.getenv("QDRANT_COLLECTION_NAME")
        
        if not qdrant_url or not qdrant_api_key or not qdrant_collection:
            raise ValueError("QDRANT environment variables (QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION_NAME) are not set")

        client = QdrantClient(
            url=qdrant_url,
            api_key=qdrant_api_key
        )

        _vector_store = QdrantVectorStore(
            client=client,
            collection_name=qdrant_collection,
            embedding=embedding
        )
    return _vector_store

def get_llm():
    global _llm
    if _llm is None:
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY environment variable is not set")
        
        _llm = ChatOpenAI(
            model="gpt-4o-mini",
            api_key=api_key,
            temperature=0,
        )
    return _llm

# ------------------------------------------------------
# Prompt Template
# ------------------------------------------------------
prompt_template = """
You are **The Gardener**, a fast and highly accurate assistant for Smart Gardeners.

Your rules:
1. Use **only** the information found in the provided *Context* section.
2. If the answer is not fully supported by the context, reply exactly:
   "Sorry but I do not have any information regarding this topic. Kindly get in touch with the team."
3. Keep answers **concise (30–40 words)** while covering all key points.
4. Ignore irrelevant parts of the conversation history unless directly useful for answering.

Context:
{context}

Conversation History:
{history}

User Question:
{question}

Final Answer:
"""

prompt = ChatPromptTemplate.from_template(prompt_template)

# ------------------------------------------------------
# Chain Components
# ------------------------------------------------------
def format_docs(docs):
    """Format retrieved documents into context string."""
    return "\n".join([doc.page_content for doc in docs])

def format_history(history: List = None) -> str:
    """Format conversation history."""
    if not history:
        return ""
    return "\n".join([f"{msg.get('role', 'user')}: {msg.get('content', '')}" for msg in history])

def process_input(input_data) -> Dict[str, Any]:
    """Process input to format context and history."""
    # Handle both Pydantic model and dict inputs
    if isinstance(input_data, dict):
        question = input_data.get("question", input_data.get("input", ""))
        history = input_data.get("history", [])
    elif isinstance(input_data, ChainInput):
        question = input_data.question
        history = input_data.history or []
    else:
        # Fallback for string input
        question = str(input_data)
        history = []
    
    # Retrieve context - lazy load vector_store
    vector_store = get_vector_store()
    results = retrieve(vector_store, question, k=5)
    context = format_docs(results) if results else ""
    
    # Format history - convert ChatMessage objects to dict format
    history_list = []
    for msg in history:
        if isinstance(msg, dict):
            history_list.append(msg)
        elif hasattr(msg, 'role') and hasattr(msg, 'content'):
            history_list.append({"role": msg.role, "content": msg.content})
        else:
            history_list.append(msg)
    
    history_str = format_history(history_list)
    
    return {
        "context": context,
        "history": history_str,
        "question": question
    }

# ------------------------------------------------------
# Create lazy LLM invocation function
# ------------------------------------------------------
def lazy_llm_invoke(messages):
    """Invoke LLM lazily, initializing it only when needed."""
    llm = get_llm()
    return llm.invoke(messages)

# ------------------------------------------------------
# Create the chain
# ------------------------------------------------------
# Use lazy LLM invocation so initialization happens only when chain is invoked
chain = (
    RunnableLambda(process_input)
    | prompt
    | RunnableLambda(lazy_llm_invoke)
    | StrOutputParser()
)

# ------------------------------------------------------
# Add LangServe routes with input schema
# ------------------------------------------------------
add_routes(
    app,
    chain,
    path="/gardener_chain",
    playground_type="default",
    input_type=ChainInput
)

# ------------------------------------------------------
# Root route - show available endpoints
# ------------------------------------------------------
@app.get("/")
async def root():
    """Show available endpoints and redirect to playground."""
    return {
        "message": "Smart Gardeners Chatbot API",
        "endpoints": {
            "playground": "/gardener_chain/playground",
            "invoke": "/gardener_chain/invoke",
            "stream": "/gardener_chain/stream",
            "docs": "/docs"
        },
        "info": "Visit /gardener_chain/playground for LangChain Studio UI"
    }
