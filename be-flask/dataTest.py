import requests
import base64
import time
from datetime import datetime
#allow time for flask server to start
time.sleep(3)
# Endpoint URL
url = 'http://localhost:5000/add_event'

#Convert event image to base 64 so that it can be serialized by json
with open("C:/Users/nican/Desktop/imageStorage/puppy.jpeg", "rb") as puppy_file:
    encoded_puppy_img=base64.b64encode(puppy_file.read()).decode('utf-8')
# Create dictionary of three key-value pairs to store time,event, and image respectively
data = {

    'time': datetime.now().strftime('%I:%M:%S%p'),
    'event': 'Face Scanned',
    'image': encoded_puppy_img
}

# Send the data using a POST request
response = requests.post(url, json=data)

# Print the response
print(response.json())
