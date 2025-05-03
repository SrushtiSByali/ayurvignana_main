import React, { useState } from 'react';
import '../styles/index.css';
import { recommendationsData, commonSymptoms } from '../utils/data';

const HealthRecommendation = () => {
  const [symptoms, setSymptoms] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const handleSymptomsChange = (e) => {
    const inputValue = e.target.value;
    setSymptoms(inputValue);
    
    if (inputValue.length > 2) {
      // Filter suggestions based on input
      const filtered = commonSymptoms.filter(
        symptom => symptom.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSymptoms(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!symptoms.trim()) {
      setError('Please enter your symptoms');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // In a real application, you would send the symptoms to your backend API
      // For demonstration, we'll simulate API call and use sample data
      setTimeout(() => {
        // Filter recommendations based on symptom keywords
        // In a real app, this would be handled by backend with proper NLP
        const symptomLower = symptoms.toLowerCase();
        const filteredRecommendations = recommendationsData.filter(rec => {
          return rec.relatedSymptoms.some(
            symptom => symptom.toLowerCase().includes(symptomLower)
          );
        });
        
        if (filteredRecommendations.length > 0) {
          setRecommendations(filteredRecommendations);
        } else {
          // If no direct matches, provide some default recommendations
          setRecommendations(recommendationsData.slice(0, 3));
        }
        
        setIsLoading(false);
      }, 1500);
      
    } catch (err) {
      console.error('Error getting recommendations:', err);
      setError('Failed to get recommendations. Please try again.');
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSymptoms('');
    setRecommendations([]);
    setError('');
  };

  return (
    <section className="health-recommendation-section">
      <div className="container">
        <div className="recommendation-container">
          <div className="form-container">
            <h2 className="section-subtitle">Enter Your Symptoms</h2>
            <form onSubmit={handleSubmit} className="recommendation-form">
              <div className="input-container">
                <div className="autosuggest-container">
                  <input
                    type="text"
                    id="symptoms"
                    value={symptoms}
                    onChange={handleSymptomsChange}
                    placeholder="E.g., headache, indigestion, joint pain..."
                    className="input-field"
                    autoComplete="off"
                  />
                  {showSuggestions && (
                    <ul className="suggestions-list">
                      {suggestions.map((suggestion, index) => (
                        <li 
                          key={index} 
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="suggestion-item"
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              {error && <p className="error-message">{error}</p>}
              
              <div className="form-buttons">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isLoading || !symptoms.trim()}
                >
                  {isLoading ? 'Finding Remedies...' : 'Get Recommendations'}
                </button>
                {symptoms && (
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={resetForm}
                    disabled={isLoading}
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Analyzing your symptoms...</p>
            </div>
          )}
          
          {recommendations.length > 0 && !isLoading && (
            <div className="results-container">
              <h2 className="results-title">Recommended Herbs</h2>
              <p className="results-subtitle">Based on your symptoms: <span>{symptoms}</span></p>
              
              <div className="recommendations-grid">
                {recommendations.map((herb, index) => (
                  <div className="recommendation-card" key={index}>
                    <div className="herb-image">
                      <img src={herb.image} alt={herb.name} />
                    </div>
                    <div className="herb-content">
                      <h3 className="herb-name">{herb.name}</h3>
                      <p className="herb-scientific-name">{herb.scientificName}</p>
                      
                      <div className="herb-for">
                        <h4>Recommended For:</h4>
                        <ul className="symptoms-list">
                          {herb.relatedSymptoms.map((symptom, idx) => (
                            <li key={idx}>{symptom}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="dosage-info">
                        <h4>Dosage & Consumption:</h4>
                        <p>{herb.dosage}</p>
                      </div>
                      
                      <div className="dosha-effect-simple">
                        <h4>Dosha Effect:</h4>
                        <div className="dosha-badges">
                          <span className={`dosha-badge ${herb.doshaEffect.vata.effect}`}>
                            Vata: {herb.doshaEffect.vata.effect}
                          </span>
                          <span className={`dosha-badge ${herb.doshaEffect.pitta.effect}`}>
                            Pitta: {herb.doshaEffect.pitta.effect}
                          </span>
                          <span className={`dosha-badge ${herb.doshaEffect.kapha.effect}`}>
                            Kapha: {herb.doshaEffect.kapha.effect}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="disclaimer">
                <p>
                  <i className="fas fa-info-circle"></i>
                  These recommendations are based on traditional Ayurvedic knowledge. 
                  Always consult with a qualified Ayurvedic practitioner before starting any new treatment.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthRecommendation;