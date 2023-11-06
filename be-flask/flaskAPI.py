from flask import Flask, render_template, jsonify, request, send_from_directory
import base64
import os
import uuid

app = Flask(__name__)

# Global variable to store the latest event data
latest_event_data = None


# ML file endpoint to push successful scan data
@app.route('/add_event', methods=['GET', 'POST'])
def add_event():
    # global variable to extract current event details for front end retrieval
    global latest_event_data

    # event data
    data = request.json
    time = data.get('time')
    event = data.get('event')
    encoded_img = data.get('image')

    # Generate a unique filename with the provided time and a UUID
    unique_id = uuid.uuid4()
    image_filename = f"image_{unique_id}.jpg"

    # Convert back to bytes
    image_data = base64.b64decode(encoded_img)

    # Save with .jpg extension
    image_path = os.path.join("./images", image_filename)
    with open(image_path, "wb") as puppy_file:
        puppy_file.write(image_data)

    # Store the event data in the global variable
    latest_event_data = {
        'time': time,
        'event': event,
        'image_filename': image_filename
    }

    print(f"{event} at: {time}")
    return jsonify({"message": "Event added successfully", "image_filename": image_filename})

# front-end endpoint to retrieve event data


@app.route('/get_latest_event', methods=['GET'])
def get_latest_event():
    global latest_event_data
    if latest_event_data is None:
        return jsonify({"message": "No event data available"}), 404
    return jsonify(latest_event_data)

# These two functions are for localhost testing


@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory("C:/Users/nican/Desktop/eventImage", filename)


@app.route('/route_imagey')
def route_image():
    return render_template('index.html', image_filename="newPuppy.jpg")


if __name__ == '__main__':
    app.run(debug=True)
