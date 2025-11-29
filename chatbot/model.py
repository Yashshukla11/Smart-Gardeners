from langchain_community.document_loaders import TextLoader
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import CharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders import TextLoader
# from langchain_pinecone import PineconeVectorStore
from langchain_community.vectorstores import Chroma
from langchain_groq import ChatGroq
import google.generativeai as genai
from langchain.prompts import PromptTemplate
from langchain.chains.question_answering import load_qa_chain
# from pinecone import Pinecone
import os
from dotenv import load_dotenv

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# loader = PyPDFLoader("./SmartGardeners.pdf")
loader = TextLoader("./data.txt")
documents = loader.load()
text_splitter = CharacterTextSplitter(chunk_size=6500, chunk_overlap=50)
docs = text_splitter.split_documents(documents)

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
# print(embeddings)

# PINECONE_INDEX_NAME = "smart-gardeners"
# PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
# pc = Pinecone(api_key=PINECONE_API_KEY)
# index = pc.Index("quickstart")

# index.describe_index_stats()

# docsearch = PineconeVectorStore.from_documents(docs, embeddings, index_name=PINECONE_INDEX_NAME)
docsearch = Chroma.from_documents(docs, embeddings)

def get_conversational_chain():
  # prompt_template="""Answer the question as detailed as possible from the provided context. Ensure responses stay within a 50-word limit. If the answer is not in
  # the provided context, reply with "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team." Do not provide incorrect answers.\n\n
  # Context:\n {context}?\n
  # Question: \n{question}\n

  # Answer:"""

  # prompt_template = """
  # Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
  # provided context just say, "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team.", don't provide the wrong answer\n\n
  # Context:\n {context}?\n
  # Question: \n{question}\n

  # Answer:
  # """
  prompt_template = """
    You are a chat bot for a company Smart Gardeners, your name is The Gardener. You will be asked questions for the company and you have to understand and analyze then answer from the Data provided and the answer should not exceed the limit 30 words and make the answer as short as possible and covering all major points.\n
    If answer to the question asked is not found in the Data then just say, "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team.", do not provide wrong answers.
    Data:\n {context}\n
    Question: \n{question}?\n

    Answer:
    """
  model = ChatGroq(
      model_name="openai/gpt-oss-120b",
      temperature=0.5,
  )
  
  prompt = PromptTemplate(template=prompt_template,
                          input_variables=["context", "question"])
  chain = load_qa_chain(llm=model, chain_type="stuff", prompt=prompt)
  return chain

def getAnswer(question):
    docs = docsearch.similarity_search(question)
    # print("Similar text: ", docs)
    chain = get_conversational_chain()

    response = chain(
        {
            "input_documents": docs,
            "question": question
        },
        return_only_outputs=True,
    )
    return response["output_text"]



