import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFlask } from '@fortawesome/free-solid-svg-icons';
import { sampleRecommendations } from '../utils/data';
import '../styles/components/HealthRecommendation.css';

function HealthRecommendation() {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showResults, setShowResults] = useState(false);

  const suggestionChips = ['Headache', 'Joint Pain', 'Digestive Issues', 'Stress', 'Skin Problems'];

  const handleSymptomChipClick = (symptom) => {
    if (!symptoms.toLowerCase().includes(symptom.toLowerCase())) {
      const newSymptoms = symptoms.trim() !== '' 
        ? `${symptoms}, ${symptom}`
        : symptom;
      setSymptoms(newSymptoms);
    }
  };

  const handleGetRecommendations = () => {
    if (!symptoms.trim()) {
      alert('Please describe your symptoms first!');
      return;
    }

    setLoading(true);
    setProgress(0);
    setRecommendations([]);
    setShowResults(false);

    // Simulate API call with progress
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          
          // Simulate delay for backend processing
          setTimeout(() => {
            const matchedRecommendations = [];
            const symptomsLower = symptoms.toLowerCase();
            
            // Check for matching keywords
            Object.keys(sampleRecommendations).forEach(key => {
              if (symptomsLower.includes(key)) {
                matchedRecommendations.push(...sampleRecommendations[key]);
              }
            });
            
            setRecommendations(matchedRecommendations);
            setLoading(false);
            setShowResults(true);
          }, 500);
        }
        return newProgress;
      });
    }, 100);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredRecommendations = recommendations.filter(rec => 
    filter === 'all' || rec.type === filter
  );

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
            <div className="smart-input-container">
              <textarea
                id="symptoms"
                className="symptoms-input"
                rows="5"
                placeholder="Enter your symptoms here (e.g., headache, joint pain, digestive issues)"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              ></textarea>
              <div className="smart-suggestions">
                {suggestionChips.map((chip, index) => (
                  <div 
                    key={index} 
                    className="suggestion-chip"
                    onClick={() => handleSymptomChipClick(chip)}
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            className={`btn btn-primary ${!loading ? 'pulsing' : ''}`}
            onClick={handleGetRecommendations}
            disabled={loading || !symptoms.trim()}
          >
            <FontAwesomeIcon icon={faFlask} /> Get Recommendations
          </button>
        </div>
        
        {loading && (
          <div className="loading">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
            <p>Finding the best herbs for you...</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
        
        {showResults && (
          <div className="recommendations">
            <div className="recommendations-header">
              <h4>Recommended Herbs</h4>
              <div className="recommendation-pills">
                <span 
                  className={`recommendation-pill ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('all')}
                >
                  All
                </span>
                <span 
                  className={`recommendation-pill ${filter === 'primary' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('primary')}
                >
                  Primary
                </span>
                <span 
                  className={`recommendation-pill ${filter === 'secondary' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('secondary')}
                >
                  Secondary
                </span>
              </div>
            </div>
            
            <div className="recommendations-list">
              {filteredRecommendations.length > 0 ? (
                filteredRecommendations.map((rec, index) => (
                  <div key={index} className="recommendation-card" data-type={rec.type}>
                    <h5>
                      {rec.name} <span className="dosage">{rec.dosage}</span>
                    </h5>
                    <p>{rec.description}</p>
                  </div>
                ))
              ) : (
                <p>No recommendations found for the given symptoms.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HealthRecommendation;