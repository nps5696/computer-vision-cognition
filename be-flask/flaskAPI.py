from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)
# Global variable to stores persistent list of events
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
    #image_filename= f"image_{unique_id.jpg}"
    """
    # global variable to store event details for front end retrieval
    global event_data

    #current event data from json payload
    data = request.json
    time = data.get('time')
    event = data.get('event')
    encoded_img = data.get('image')

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

#front-end endpoint to retrieve event data

@app.route('/get_event_data', methods=['GET'])
def get_latest_event():
    global event_data
    if not event_data :
        return jsonify({"message": "No event data available"}), 404
    return jsonify(event_data)


if __name__ == '__main__':
    app.run(debug=True)
