
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/get_event_data')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEvents(data);
  //       setCurrentIndex(data.length - 1); // Set to the latest event
  //     })
  //     .catch((error) => console.error('Error fetching event data:', error));
  // }, []);

  const apiHost = process.env.BACKEND_API_URL || 'localhost';


  useEffect(() => {
  fetch(`http://${apiHost}:5000/get_event_data`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setEvents(data);
      setCurrentIndex(data.length - 1);
    })
    .catch((error) => console.error('Error fetching event data:', error.message));
}, []);

  if (events.length === 0) {
    return <div>Waiting for backend service to load...</div>;
  }

  //currentEvent = '';

  let currentEvent = events[currentIndex];

  // Decode the base64 image data
  //const imageSrc = `data:image/jpeg;base64,${currentEvent['image.jpg']}`;

  const imageSrc = currentEvent['image.jpg']
  ? `data:image/jpeg;base64,${currentEvent['image.jpg']}`
  : 'default-image.jpg';


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
      <img src={imageSrc} alt="Event" style={{ maxWidth: '50vw', maxHeight: '50vh' }} />
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
};

const AboutPage = () => (
  <div>
    <h1>AboutPage</h1>
    {/* Add your contact page content here */}
  </div>
);

const ContactPage = () => (
  <div>
    <h1>Contact Page</h1>
    {/* Add your contact page content here */}
  </div>
);

//function App() {
//   const [events, setEvents] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//
//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/get_event_data')
//       .then((response) => response.json())
//       .then((data) => {
//         setEvents(data);
//         setCurrentIndex(data.length - 1); // Set to the latest event
//       })
//       .catch((error) => console.error('Error fetching event data:', error));
//   }, []);
//
//   if (events.length === 0) {
//     return <div>Loading...</div>;
//   }
//
//   const currentEvent = events[currentIndex];
//
//   // Decode the base64 image data
//   // const imageSrc = `data:image/jpeg;base64,${currentEvent['image.jpg']}`;
//   const imageSrc = currentEvent['image.jpg']
//   ? `data:image/jpeg;base64,${currentEvent['image.jpg']}`
//   : 'default-image.jpg';
//
//
//   const goToPreviousEvent = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };
//
//   const goToNextEvent = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, events.length - 1));
//   };
//
//   const goToLatestEvent = () => {
//     setCurrentIndex(events.length - 1);
//   };
//
//   return (
//     <div>
//       <h2>Event Data</h2>
//       <p>Event Time: {currentEvent.time}</p>
//       <p>Event: {currentEvent.event}</p>
//       <img src={imageSrc} alt="Event" />
//       <div>
//         <button onClick={goToPreviousEvent} disabled={currentIndex === 0}>
//           Previous
//         </button>
//         <button onClick={goToNextEvent} disabled={currentIndex === events.length - 1}>
//           Next
//         </button>
//         <button onClick={goToLatestEvent}>
//           Latest
//         </button>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
     <Router>
      <div className="App">
        <div className="menu">
          <h2>Menu</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;