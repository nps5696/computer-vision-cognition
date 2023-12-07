from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_cors import CORS
import uuid
import base64
from PIL import Image
from io import BytesIO

app = Flask(__name__)
CORS(app)
#Global variable to stores persistent list of events
event_data = []

@app.route('/')
def home():
    print("HOME!")
 
#ML file endpoint to push successful scan data
@app.route('/add_event', methods=['POST'])
def add_event():
    """
    #uuid generate unique id for each image
    #unique_id=uuid.uuid4()
    #imagefilename= f"image{unique_id.jpg}"
    """
    # global variable to store event details for front end retrieval
    global event_data

    #current event data from json payload
    data = request.json
    time = data.get('time')
    event = data.get('event')
    encoded_img = data.get('image')

    #set desired image dimensions
    resized_img = dimensions(encoded_img, width=500, height=500)

    # store current event into dictionaries
    latest_event_data = {
        'time': time,
        'event': event,
        'image.jpg': encoded_img
    }
    #appends latest event to event data list
    event_data.append(latest_event_data)

    print(f"{event} at: {time}")
    return jsonify({"message": "Event added successfully"})


#decodes, adjusts dimensions of image, then re-encodes for front-end retrieval
def dimensions(encoded_img, width, height):
    img_data = base64.b64decode(encoded_img)
    img = Image.open(BytesIO(img_data))
    img = img.resize((width, height))

    buffered = BytesIO()
    img.save(buffered, format="JPEG") 
    re_coded_img = base64.b64encode(buffered.getvalue()).decode()
    return re_coded_img





#front-end endpoint to retrieve event data

@app.route('/get_event_data', methods=['GET'])
def get_latest_event():
    global event_data
    if not event_data :
        event_data.append({
            'time': '',
            'event': '',
            'image.jpg': ''
        })
        return jsonify(event_data), 200
    return jsonify(event_data)


if __name__ == '__main__':
    app.run(debug=True)
