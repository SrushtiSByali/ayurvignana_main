import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCamera, faMicroscope, faBookMedical } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="section-intro">
        <div className="section-icon">
          <FontAwesomeIcon icon={faCogs} />
        </div>
        <h3>How It Works</h3>
        <p>Advanced technology meets ancient wisdom</p>
      </div>
      
      <div className="process-steps">
        <div className="process-step">
          <div className="step-number">1</div>
          <div className="step-icon">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <h4>Capture or Upload</h4>
          <p>Take a photo of an herb or upload an existing image</p>
        </div>
        <div className="process-connector"></div>
        <div className="process-step">
          <div className="step-number">2</div>
          <div className="step-icon">
            <FontAwesomeIcon icon={faMicroscope} />
          </div>
          <h4>AI Analysis</h4>
          <p>Our advanced AI model identifies the herb with high accuracy</p>
        </div>
        <div className="process-connector"></div>
        <div className="process-step">
          <div className="step-number">3</div>
          <div className="step-icon">
            <FontAwesomeIcon icon={faBookMedical} />
          </div>
          <h4>Knowledge Database</h4>
          <p>Access centuries of Ayurvedic wisdom instantly</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;