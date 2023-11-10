
import React, { useState, useEffect } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_event_data')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setCurrentIndex(data.length - 1); // Set to the latest event
      })
      .catch((error) => console.error('Error fetching event data:', error));
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  const currentEvent = events[currentIndex];

  // Decode the base64 image data
  const imageSrc = `data:image/jpeg;base64,${currentEvent['image.jpg']}`;

  const goToPreviousEvent = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNextEvent = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, events.length - 1));
  };

  const goToLatestEvent = () => {
    setCurrentIndex(events.length - 1);
  };

  return (
    <div>
      <h2>Event Data</h2>
      <p>Event Time: {currentEvent.time}</p>
      <p>Event: {currentEvent.event}</p>
      <img src={imageSrc} alt="Event" />
      <div>
        <button onClick={goToPreviousEvent} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextEvent} disabled={currentIndex === events.length - 1}>
          Next
        </button>
        <button onClick={goToLatestEvent}>
          Latest
        </button>
      </div>
    </div>
  );
}

export default App;