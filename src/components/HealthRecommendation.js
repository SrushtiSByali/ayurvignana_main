import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFlask } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/HealthRecommendation.css';

function HealthRecommendation() {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [recommendations, setRecommendations] = useState([]);

  const handleGetRecommendations = async () => {
    if (!symptoms.trim()) {
      alert('Please describe your symptoms first!');
      return;
    }

    setLoading(true);
    setProgress(0);
    setRecommendations([]);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      // Call your backend API
      const response = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms })
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="recommendation" className="feature-card">
      <div className="glow-effect"></div>
      <div className="card-header">
        <div className="card-badge">AI Health</div>
        <h3>Health Recommendation</h3>
        <p>Get personalized herb recommendations based on your symptoms</p>
        <FontAwesomeIcon icon={faHeartbeat} className="card-icon" />
      </div>
      <div className="card-content">
        <div className="symptoms-form">
          <div className="form-group">
            <label htmlFor="symptoms">Describe Your Symptoms</label>
            <textarea
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Enter your symptoms here (e.g., headache, joint pain, digestive issues)"
              rows="5"
            ></textarea>
          </div>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Finding the best herbs for you...</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="recommendations-list">
            {recommendations.map((herb, index) => (
              <div key={index} className="recommendation-card">
                <h4>{herb.name}</h4>
                <p className="dosage">Recommended Dosage: {herb.dosage}</p>
                <p className="guidance">{herb.guidance}</p>
                <div className="benefits">
                  <h5>Benefits:</h5>
                  <ul>
                    {herb.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <button 
          className="btn btn-primary"
          onClick={handleGetRecommendations}
          disabled={loading || !symptoms.trim()}
        >
          <FontAwesomeIcon icon={faFlask} /> Get Recommendations
        </button>
      </div>
    </div>
  );
}

export default HealthRecommendation;