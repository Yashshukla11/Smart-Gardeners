from typing import List
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_qdrant import QdrantVectorStore

def load_text_file(file_path: str):
    loader = TextLoader(file_path)
    return loader.load()

def split_documents(documents: list):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
    )
    return text_splitter.split_documents(documents)

def retrieve(vector_store: QdrantVectorStore, query: str, k: int = 5) -> List[str]:
    return vector_store.similarity_search(query, k=k)
