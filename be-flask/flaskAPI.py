from flask import Flask, render_template, jsonify, request, send_from_directory
import base64
import os

app = Flask(__name__)

# Global variable to store the latest event data
latest_event_data = None


#ML file endpoint to push successfull scan data
@app.route('/add_event', methods=['GET', 'POST'])
def add_event():
    #global variable to extract current event details for front end retrieval
    global latest_event_data
    #event data
    data = request.json
    time = data.get('time')
    event = data.get('event')
    encoded_puppy_img = data.get('image')

    # Convert back to bytes
    puppyByte = base64.b64decode(encoded_puppy_img)

    # Save with .jpg extension
    image_path = os.path.join("C:/Users/nican/Desktop/eventImage", "newPuppy.jpg")
    with open(image_path, "wb") as puppy_file:
        puppy_file.write(puppyByte)

    # Store the event data in the global variable
    latest_event_data = {
        'time': time,
        'event': event,
        'image_filename': 'newPuppy.jpg'
    }

    print(f"{event} at: {time}")
    return jsonify({"message": "Event added successfully"})

#front-end endpoint to retrieve event data
@app.route('/get_latest_event', methods=['GET'])
def get_latest_event():
    global latest_event_data
    if latest_event_data is None:
        return jsonify({"message": "No event data available"}), 404
    return jsonify(latest_event_data)




## These two functions are for localhost testing
@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory("C:/Users/nican/Desktop/eventImage", filename)


@app.route('/route_imagey')
def route_image():
    return render_template('index.html', image_filename="newPuppy.jpg")


if __name__ == '__main__':
    app.run(debug=True)
