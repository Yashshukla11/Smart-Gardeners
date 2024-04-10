from typing import Union
from model import getAnswer 
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/ask")
def read_item(question: Union[str, None] = ""):
    print(question)
    if question == "":
        return {"error": "Please provide a question"}
    return {"answer": getAnswer(question)}