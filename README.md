# Computer Vision Project

## Purpose

- The main idea behind this project is to leanr objectives about collaborative development of backend, frontend and machine learning modelling. Three main parts of application will be built to process data and produce meaningful events to the user.   

## Planned Outcome

- The system which i capable of detecting predefined objects from a camera feed
- Events are shown to a user within web UI
- FE communicate with BE to to pull new events using BE API interface 

## Technologies

- Backend will be written in python
- Machine learning will be performed in python, using tensorflow and keras libraries 
- Frontend will be build on React JS framework


## Flask API
- Serves as intermediary between TensorFlow model and front-end website
- Retrieves face scan event image and data via post request, json payload
- Latest event endpoint for front end retrieval

## Front-End
- Uses react via node.js and npm
- fetches event data list from flask api for web-server output
- button functionality to switch between event data that has been posted

## Deployment Guide


### Start Flask Backend
- Package is built as docker image, to run image:
```
docker run -it -p 5000:5000 nickage2023/psu-cv-fbe 
```
This command will bring up flask backend which is responsible for passing event data to frontend. 

### Start React Frontend
- Package is built as docker image, to run image:
```
docker run -it -p 3000:3000 nickage2023/psu-cv-fbe 
```

### Start Frame Recieving Model Backend
- At thins point package needs to be ran on localmachine, we are workong on satisfying its requirements, currently opencv package core dumps...

- You have a chose if using your internal webcam for face detection or use external webcam with RSTP protocol support, for interal webcam set variable(your internal webcam may have index 0, 1, 2..):
```
cap = cv2.VideoCapture(1)
```

or you can connect to RSTP sream(check your webcam settings for stream and port numbers):
```
cap = cv2.VideoCapture('rtsp://webcam_login:webcan_password@webcam_IP_address:554/stream1')
```

to start facetracker app run commands:
```
git clone git@github.com:nps5696/computer-vision-cognition.git
cd facetracker
pip3 install -r requirements.txt
python3 facetracker.py 
```

If everything goes well you will see new windows titled 'Facetracker' and face detection events will be submitted to backand and will appear in your frontend browser tab (default http://localhost:3000) 
