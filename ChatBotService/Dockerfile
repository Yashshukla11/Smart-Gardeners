FROM ubuntu

RUN apt update
RUN apt install python3-pip -y

WORKDIR /ChatBot
COPY requirements.txt /ChatBot/
RUN pip install -r requirements.txt
COPY . /ChatBot/

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]