FROM python:3.11

EXPOSE 5000

WORKDIR /flask-api

COPY requirements.txt .
COPY /be-flask/* .

RUN pip install Flask requests flask-cors Pillow==10.0.1

#RUN pip install -r requirements.txt

CMD ["python","flaskAPI.py"]