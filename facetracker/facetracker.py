import os
import tensorflow as tf
# import json
import numpy as np
# from matplotlib import pyplot as plt
# import os
# import time
# import uuid
import cv2
from tensorflow.keras.models import load_model
from datetime import datetime
import base64
import requests
import time
import threading


rtsp_username = os.environ.get("RTSP_USERNAME")
rtsp_password = os.environ.get("RTSP_PASSWORD")
rtsp_server_address = os.environ.get("RTSP_SERVER_ADDRESS")
os.environ['DISPLAY'] = ':99'


def rate_limited(max_per_minute):
    min_interval = 60.0 / float(max_per_minute)

    def decorate(func):
        last_time_called = [None]

        def rate_limited_function(*args, **kwargs):
            if last_time_called[0] is not None:
                elapsed = time.perf_counter() - last_time_called[0]
                left_to_wait = min_interval - elapsed
                if left_to_wait > 0:
                    time.sleep(left_to_wait)
            last_time_called[0] = time.perf_counter()
            return func(*args, **kwargs)
        return rate_limited_function
    return decorate


# rate limiter
@rate_limited(max_per_minute=10)
def submit_frame(frame):
    # Assuming `frame` is your image
    _, buffer = cv2.imencode('.jpg', frame)

    encoded_image = base64.b64encode(buffer).decode('utf-8')  # Convert the image to base64

    # Create the data payload
    current_time = datetime.now().isoformat()  # Current date and time in ISO format
    data = {
        'time': current_time,
        'event': 'Face Detected',  # Example event
        'image': encoded_image  # The base64 encoded image
    }

    # Send the POST request to the API
    response = requests.post('http://172.17.0.1:5000/add_event', json=data)

    # Check the response
    if response.status_code == 200:
        print('Event added successfully:', response.json())
    else:
        print('Failed to add event:', response.text)


def submit_frame_threaded(frame):
    if not stop_event.is_set():
        # Start a new thread for the submit_frame function
        thread = threading.Thread(target=submit_frame, args=(frame,))
        thread.start()

        # for thread in threading.enumerate():
        #     if thread is not threading.current_thread():
        #         thread.join()


stop_event = threading.Event()
facetracker = load_model('facetracker_model.h5')
rtsp_url = f"rtsp://{rtsp_username}:{rtsp_password}@{rtsp_server_address}/stream1"
cap = cv2.VideoCapture(rtsp_url)
#cap = cv2.VideoCapture(1)

while cap.isOpened():
    _, frame = cap.read()
    #frame = frame[50:500, 50:500,:]

    frame = cv2.resize(frame, (1920, 1080))

    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    resized = tf.image.resize(rgb, (120, 120))

    yhat = facetracker.predict(np.expand_dims(resized/255, 0))
    sample_coords = yhat[1][0]
    
    if yhat[0] > 0.7:

        # changing state since face is detected make call to BE API submit picture and time
        face_detected = True
        print("face_detected:", face_detected)

        ### API call to BE
        #submit_frame(frame)
        submit_frame_threaded(frame)

        #print("yhat[1][0]:",yhat[1][0])
        x_scale = frame.shape[1] - 1
        y_scale = frame.shape[0] - 1
        #print("scales:",x_scale, y_scale)

        # Scaling the sample coordinates
        start_point = tuple(np.multiply(sample_coords[:2], [x_scale, y_scale]).astype(int))
        end_point = tuple(np.multiply(sample_coords[2:], [x_scale, y_scale*1.15]).astype(int))
        #print("start_point:",start_point)
        #print("end_point:",end_point)
        
        # Controls the main rectangle
        cv2.rectangle(frame, start_point, end_point, (0, 255, 0), 3)

        # Controls the label rectangle
        label_rect_start = tuple(np.add(start_point, [0, -40]))
        label_rect_end = tuple(np.add(start_point, [160, 0]))
        cv2.rectangle(frame, label_rect_start, label_rect_end, (255, 255, 255), -1)
        #print("label_rect_start:",label_rect_start)
        #print("label_rect_end:",label_rect_end)

        # Put the label text above the main rectangle
        text_pos = tuple(np.add(start_point, [0, -5]))
        cv2.putText(frame, 'face area', text_pos, cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 0), 2, cv2.LINE_AA)

    else:
        face_detected = False
        print("face not detected:", face_detected)

    # cv2.imshow('FaceTrack', frame)
    #
    # if cv2.waitKey(1) & 0xFF == ord('q'):
    #     stop_event.set()
    #     break
cap.release()
cv2.destroyAllWindows()
