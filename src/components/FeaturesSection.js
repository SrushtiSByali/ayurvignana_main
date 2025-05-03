import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
import HerbRecognition from './HerbRecognition';
import HealthRecommendation from './HealthRecommendation';
import '../styles/components/FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-wrapper" id="features-section">
      <div className="section-intro">
        <div className="section-icon">
          <FontAwesomeIcon icon={faMortarPestle} />
        </div>
        <h3>Our Features</h3>
        <p>Explore the powerful tools that bring ancient Ayurvedic wisdom to the modern world</p>
      </div>
      
      <div className="features">
        <HerbRecognition />
        <HealthRecommendation />
      </div>
    </section>
  );
}

export default FeaturesSection;