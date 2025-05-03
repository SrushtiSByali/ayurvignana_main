import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHeartbeat, faPagelines, faSeedling } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-badge">Advanced AI-Powered</div>
          <h2>
            <span className="accent">Discover</span> the Sacred Wisdom of{' '}
            <span className="accent">Ayurveda</span>
          </h2>
          <p>
            Harness the power of artificial intelligence to identify herbs from images
            and receive personalized health recommendations based on your unique symptoms.
          </p>
          <div className="hero-buttons">
            <a href="#recognition" className="btn btn-primary">
              <FontAwesomeIcon icon={faLeaf} /> Identify Herbs
            </a>
            <a href="#recommendation" className="btn btn-outline">
              <FontAwesomeIcon icon={faHeartbeat} /> Get Recommendations
            </a>
          </div>
        </div>
        <div className="floating-herbs">
          <div className="floating-herb herb-1">
            <FontAwesomeIcon icon={faPagelines} />
          </div>
          <div className="floating-herb herb-2">
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <div className="floating-herb herb-3">
            <FontAwesomeIcon icon={faSeedling} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;