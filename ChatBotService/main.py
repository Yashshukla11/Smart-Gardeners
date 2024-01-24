import os
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import streamlit as st
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()
os.getenv("GOOGLE_API_KEY")
os.getenv("ORIGIN")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def read_text_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        raw_text = file.read()
    return raw_text

def get_text_chunks(text):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=10000, chunk_overlap=1000)
    chunks = splitter.split_text(text)
    return chunks

def get_vector_store(chunks):
    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001")
    vector_store = FAISS.from_texts(chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

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
    You are a chat bot for a company Smart Gardeners, your name is The Gardener. You will be asked questions based on the company and you have to answer them in maximum 50 words from the context provided.\n
    If answer to the question asked is not found in the context then just say, "Sorry but I do not have any information regarding this topic. Kindly get in touch of the team.", do not provide wrong answers.
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """
    model = ChatGoogleGenerativeAI(model="gemini-pro",
                                   client=genai,
                                   temperature=0.3,
                                   )
    prompt = PromptTemplate(template=prompt_template,
                            input_variables=["context", "question"])
    chain = load_qa_chain(llm=model, chain_type="stuff", prompt=prompt)
    return chain

def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index", embeddings)
    docs = new_db.similarity_search(user_question)
    chain = get_conversational_chain()
    response = chain(
        {"input_documents": docs, "question": user_question}, return_only_outputs=True, )
    # print(response)
    return response

def improveResponse(answer):
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"""Answer: {answer}\n\n
    Ensure responses stay within a 50-word limit. If the answer is not in
    the provided context, reply with "Sorry but I do not have any information regarding this topic. Kindly get in touch with the team." Do not provide incorrect answers.\n\n

    Answer:
    """
    response = model.generate_content(prompt)
    print(response.text)
    return response.text

def trainData():
    pdf_file_path = "data/sgF.pdf"
    raw_text = get_pdf_text([pdf_file_path])
    # raw_text = read_text_from_file("data/sgft.txt")
    # print(raw_text)
    text_chunks = get_text_chunks(raw_text)
    # print(text_chunks)
    get_vector_store(text_chunks)

# trainData()

app = Flask(__name__)
CORS(app, origins=os.getenv("ORIGIN"))

@app.route('/ask', methods=['GET'])
def ask_question():
    user_question = request.args.get('question', default='', type=str)
    response = user_input(user_question)
    print("\n\n")
    print(response)
    print("\n\n")
    print(response["output_text"])
    return jsonify({'response': response["output_text"]})
    # if(len(response["output_text"]) > 100):
    #     newResponse = improveResponse(response["output_text"])
    #     return jsonify({'response': newResponse})
    # else:
    #     return jsonify({'response': response["output_text"]})

if __name__ == '__main__':
    app.run(debug=True)
