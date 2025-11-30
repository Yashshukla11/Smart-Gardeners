from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_openai import OpenAIEmbeddings
from qdrant_client import QdrantClient
from langchain_qdrant import QdrantVectorStore
from utils.utils import load_text_file, split_documents, retrieve

# Load .env file if it exists (for local development)
# On Vercel, environment variables are set directly, so this is optional
try:
    load_dotenv()
except Exception:
    pass  # Ignore if .env file doesn't exist (normal on Vercel)

os.environ["LANGCHAIN_TRACING_V2"] = "false"
# os.environ["LANGCHAIN_ENDPOINT"] = "http://localhost:8080"
# os.environ["LANGCHAIN_API_KEY"] = "local"
# os.environ["LANGCHAIN_PROJECT"] = "smart-gardeners"


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
        )
    return _llm

# Lazy initialization - only create when needed
vector_store = None
llm = None

# ------------------------------------------------------
# Prompt
# ------------------------------------------------------
prompt_template = """
You are The Gardener, a chatbot for Smart Gardeners.
Use only the provided context to answer.
Keep the answer under 30 words and cover the key points.

If the answer is not found in the context, reply:
"Sorry but I do not have any information regarding this topic. Kindly get in touch of the team."

Context:
{context}

Question:
{question}

Answer:
"""

prompt_template_with_history = """
You are **The Gardener**, a fast and highly accurate assistant for Smart Gardeners.

Your rules:
1. Use the information found in the provided *Context* section to answer the question.
2. If the answer is not found in the context, reply:
   "Sorry but I do not have any information regarding this topic. Kindly get in touch with the team."
3. Keep answers concise but informative.
4. Ignore irrelevant parts of the conversation history unless directly useful for answering.

Context:
{context}

Conversation History:
{history}

User Question:
{question}

Final Answer:
"""

# ------------------------------------------------------
# Request Schema
# ------------------------------------------------------
class Query(BaseModel):
    question: str
    history: List[dict] = []

from fastapi.middleware.cors import CORSMiddleware

# ------------------------------------------------------
# FastAPI App
# ------------------------------------------------------
app = FastAPI()

origins = os.getenv("CORS_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------------------------------------
# Helper: Generate answer
# ------------------------------------------------------
def get_answer(question: str, history: List[dict]) -> str:
    # Lazy load vector_store and llm
    vs = get_vector_store()
    results = retrieve(vs, question, k=10)
    print("\n\n------------------------")
    print(results)
    print("------------------------\n\n")

    context = "\n".join([doc.page_content for doc in results])

    if not context.strip():
        return "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team."

    history_str = "\n".join([f"{msg['role']}: {msg['content']}" for msg in history])

    prompt = prompt_template_with_history.format(context=context, question=question, history=history_str)

    llm_instance = get_llm()
    response = llm_instance.invoke(prompt)
    return response.content.strip()

# ------------------------------------------------------
# Endpoint
# ------------------------------------------------------
@app.post("/ask")
def answer(query: Query):
    if not query.question.strip():
        return {"error": "Please provide a question"}

    answer = get_answer(query.question, query.history)
    return {"answer": answer}
