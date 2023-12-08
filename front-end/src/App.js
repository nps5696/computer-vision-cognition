
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

  const apiHost = process.env.REACT_APP_API_HOST || 'localhost';

  console.log(process.env);

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
    <h1>About FaceTracker</h1>

    <p>Welcome to FaceTracker, your advanced face detection and tracking solution! FaceTracker is a cutting-edge application powered by state-of-the-art machine learning and computer vision technologies to provide accurate and robust face tracking capabilities.</p>

    <h2>Our Mission</h2>

    <p>At FaceTracker, our mission is to deliver a seamless and efficient face tracking experience for a variety of applications. Whether you're building an interactive user interface, implementing security systems, or exploring innovative augmented reality experiences, FaceTracker is designed to meet your needs.</p>

    <h2>Key Features</h2>

    <ul>
        <li><strong>Advanced Face Detection:</strong> Our app utilizes the latest advancements in facial recognition technology to identify and track faces in real-time.</li>
        <li><strong>Precise Bounding Box Regression:</strong> Achieve precise and reliable face location data with our regression model, allowing for accurate positioning and tracking.</li>
        <li><strong>User-Friendly Interface:</strong> FaceTracker comes with an intuitive and user-friendly interface, making it easy to integrate into your projects without hassle.</li>
        <li><strong>Versatile Applications:</strong> From security systems and entertainment applications to interactive installations, FaceTracker adapts to various use cases.</li>
    </ul>

    <h2>How It Works</h2>

    <p>FaceTracker leverages a powerful neural network architecture, including the VGG16 model, to analyze and track faces in images or video streams. The combination of robust feature extraction and sophisticated classification and regression heads ensures accurate and reliable results.</p>

    <h2>Get Started</h2>

    <p>Ready to integrate FaceTracker into your project? Simply follow our easy-to-use API documentation and start experiencing the benefits of advanced face tracking today.</p>

    <p>Thank you for choosing FaceTracker. We're excited to be a part of your innovative projects!</p>
    {/* Add your contact page content here */}
  </div>
);

const ContactPage = () => (
  <div>
    <h1>Contact Us</h1>

    <p>If you have any questions, suggestions, or feedback, feel free to reach out to us:</p>

    <h2>Email:</h2>
    <p>contact@facetracker.nickage.us</p>

    <h2>Phone:</h2>
    <p>+1 (555) 123-4567</p>

    <h2>Address:</h2>
    <p>
      123 Tech Street <br />
       Innovation City <b />
       Digital Land</p>

    <p>We appreciate your interest in FaceTracker and look forward to hearing from you!</p>
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