from typing import Union
from model import getAnswer 
from fastapi import FastAPI

app = FastAPI()

origins = ["http://localhost:5173", "https://smart-gardeners.vercel.app"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/ask")
def read_item(question: Union[str, None] = ""):
    print(question)
    if question == "":
        return {"error": "Please provide a question"}
    return {"answer": getAnswer(question)}