import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="feature-title">Herb Recognition</h3>
            <p className="feature-description">
              Upload images of herbs and plants to instantly identify them and learn about their
              Ayurvedic properties and benefits.
            </p>
            <Link to="/herb-recognition" className="feature-link">
              Try Herb Recognition <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3 className="feature-title">Health Recommendations</h3>
            <p className="feature-description">
              Receive personalized Ayurvedic herb recommendations based on your symptoms, body type,
              and health concerns.
            </p>
            <Link to="/health-recommendation" className="feature-link">
              Get Recommendations <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3 className="feature-title">Dosha Analysis</h3>
            <p className="feature-description">
              Understand how each herb interacts with your Vata, Pitta, and Kapha doshas for a truly
              personalized Ayurvedic experience.
            </p>
            <Link to="/herb-recognition" className="feature-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;