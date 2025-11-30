import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from langchain_qdrant import QdrantVectorStore
from langchain_openai import OpenAIEmbeddings
from qdrant_client.http import models

from utils.utils import load_text_file, split_documents

load_dotenv()

# ----------------------------------------------------------
# Initialize Embeddings
# ----------------------------------------------------------
def get_embeddings():
    return OpenAIEmbeddings(
        model="text-embedding-3-small",
        api_key=os.getenv("OPENAI_API_KEY"),
    )

# ----------------------------------------------------------
# Create Qdrant Vector Store
# ----------------------------------------------------------
def get_vector_store(embedding):
    client = QdrantClient(
        url=os.getenv("QDRANT_URL"),
        api_key=os.getenv("QDRANT_API_KEY")
    )

    return client, QdrantVectorStore(
        client=client,
        collection_name=os.getenv("QDRANT_COLLECTION_NAME"),
        embedding=embedding
    )

# ----------------------------------------------------------
# Embed and upsert new data
# ----------------------------------------------------------
def embed_data():
    print("Loading data...")
    documents = load_text_file("./data/data.txt")
    split_docs = split_documents(documents)

    print(f"Chunks to embed: {len(split_docs)}")

    embedding = get_embeddings()
    client, vector_store = get_vector_store(embedding)

    # ------------------------------------------------------
    # Delete all existing points in the collection
    # ------------------------------------------------------
    print("Deleting old embeddings from Qdrant...")
    client.delete(
        collection_name=os.getenv("QDRANT_COLLECTION_NAME"),
        points_selector=models.FilterSelector(
            filter=models.Filter(
                must=[]
            )
        )
    )
    print("All existing vectors deleted.")

    # ------------------------------------------------------
    # Insert new vectors
    # ------------------------------------------------------
    print("Upserting new chunks...")
    vector_store.add_documents(split_docs)

    print("Embedding completed and stored.")

# ----------------------------------------------------------
# Main
# ----------------------------------------------------------
if __name__ == "__main__":
    embed_data()
