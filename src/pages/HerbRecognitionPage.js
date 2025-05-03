import React from 'react';
import HerbRecognition from '../components/HerbRecognition';
import '../styles/index.css';

const HerbRecognitionPage = () => {
  return (
    <div className="herb-recognition-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Herb Recognition</h1>
          <p className="page-description">
            Upload an image of an herb to identify it and learn about its Ayurvedic properties
          </p>
        </div>
      </div>
      <HerbRecognition />
    </div>
  );
};

export default HerbRecognitionPage;