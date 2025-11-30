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

# ------------------------------------------------------
# Request Schema
# ------------------------------------------------------
class Query(BaseModel):
    question: str

# ------------------------------------------------------
# FastAPI App
# ------------------------------------------------------
app = FastAPI()

# ------------------------------------------------------
# Helper: Generate answer
# ------------------------------------------------------
def get_answer(question: str) -> str:
    results = retrieve(vector_store, question, k=5)

    context = "\n".join([doc.page_content for doc in results])

    if not context.strip():
        return "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team."

    prompt = prompt_template.format(context=context, question=question)

    response = llm.invoke(prompt)
    return response.content.strip()

# ------------------------------------------------------
# Endpoint
# ------------------------------------------------------
@app.post("/answer")
def answer(query: Query):
    if not query.question.strip():
        return {"error": "Please provide a question"}

    answer = get_answer(query.question)
    return {"answer": answer}
