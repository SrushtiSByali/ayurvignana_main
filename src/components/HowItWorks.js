import React from 'react';
import '../styles/index.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Upload or Input</h3>
              <p className="step-description">
                Either upload an image of an herb for identification or enter your health symptoms 
                to get personalized recommendations.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">AI Analysis</h3>
              <p className="step-description">
                Our advanced AI analyzes your input, identifying herbs with precision or matching 
                your symptoms with appropriate Ayurvedic remedies.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Detailed Results</h3>
              <p className="step-description">
                Receive comprehensive information about herbs or personalized health recommendations 
                with dosage guidance and dosha compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;