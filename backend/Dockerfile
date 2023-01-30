FROM python:3.9

WORKDIR /backend

COPY requirements.txt server.py sentences_delivery.txt sentences_food.txt utils.py ./

RUN pip install -r ./requirements.txt

CMD ["python", "server.py"]