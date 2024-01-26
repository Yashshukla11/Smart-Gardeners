FROM ubuntu

RUN apt update
RUN apt install python3-pip -y

WORKDIR /ChatBot
COPY requirements.txt /ChatBot/
RUN pip install -r requirements.txt
COPY . /ChatBot/
COPY .env /ChatBot/
EXPOSE 5000
CMD ["python3", "./main.py"]

# RUN pip install -r ChatBotService/requirements.txt

# WORKDIR /app

# COPY . .

# CMD ["python3", "main.py" ,"--host=0.0.0.0"]