FROM python:3.9

EXPOSE 5000

WORKDIR /flask-api

COPY requirements.txt .
COPY ../../ .

RUN pip install -r requirements.txt

CMD ["python","runFiles.py"]
