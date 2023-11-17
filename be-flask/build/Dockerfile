FROM python:3.11

EXPOSE 5000

WORKDIR /flask-api

COPY requirements.txt .
COPY ../../*.py .

RUN pip install Flask requests flask-cors

#RUN pip install -r requirements.txt

CMD ["python","runFiles.py"]
