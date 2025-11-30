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

load_dotenv()


os.environ["LANGCHAIN_TRACING_V2"] = "false"
# os.environ["LANGCHAIN_ENDPOINT"] = "http://localhost:8080"
# os.environ["LANGCHAIN_API_KEY"] = "local"
# os.environ["LANGCHAIN_PROJECT"] = "smart-gardeners"


# ------------------------------------------------------
# Load Qdrant connection
# ------------------------------------------------------
def get_vector_store():
    embedding = OpenAIEmbeddings(
        model="text-embedding-3-small",
        api_key=os.getenv("OPENAI_API_KEY"),
    )

    client = QdrantClient(
        url=os.getenv("QDRANT_URL"),
        api_key=os.getenv("QDRANT_API_KEY")
    )

    return QdrantVectorStore(
        client=client,
        collection_name=os.getenv("QDRANT_COLLECTION_NAME"),
        embedding=embedding
    )


vector_store = get_vector_store()

# ------------------------------------------------------
# LLM
# ------------------------------------------------------
llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
)

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
    results = retrieve(vector_store, question, k=10)
    print("\n\n------------------------")
    print(results)
    print("------------------------\n\n")

    context = "\n".join([doc.page_content for doc in results])

    if not context.strip():
        return "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team."

    history_str = "\n".join([f"{msg['role']}: {msg['content']}" for msg in history])

    prompt = prompt_template_with_history.format(context=context, question=question, history=history_str)

    response = llm.invoke(prompt)
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
