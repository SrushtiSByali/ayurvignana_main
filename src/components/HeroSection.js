import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Discover the Power of Ayurveda</h1>
          <p className="hero-description">
            Identify herbs with our AI recognition system and get personalized health recommendations
            based on ancient Ayurvedic wisdom, all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/herb-recognition" className="btn btn-primary">
              Identify Herbs
            </Link>
            <Link to="/health-recommendation" className="btn btn-secondary">
              Get Recommendations
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.jpg" alt="Ayurvedic herbs and treatments" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;