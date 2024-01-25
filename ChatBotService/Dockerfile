FROM python:3
WORKDIR /ChatBot
COPY requirements.txt /ChatBot/
RUN pip install -r requirements.txt
COPY . /ChatBot/
COPY .env /ChatBot/
EXPOSE 3000
CMD ["python3", "./main.py"]