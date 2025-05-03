import React from 'react';
import HealthRecommendation from '../components/HealthRecommendation';
import '../styles/index.css';

const HealthRecommendationPage = () => {
  return (
    <div className="health-recommendation-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Health Recommendations</h1>
          <p className="page-description">
            Enter your symptoms to receive personalized Ayurvedic herb recommendations
          </p>
        </div>
      </div>
      <HealthRecommendation />
    </div>
  );
};

export default HealthRecommendationPage;