FROM python:3.11

EXPOSE 5000

WORKDIR /flask-api

COPY requirements.txt .
COPY ../*.py .

RUN pip3 install -r requirements.txt

CMD ["python","runFiles.py"]
