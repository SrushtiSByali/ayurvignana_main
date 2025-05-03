import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, 
  faCloudUploadAlt, 
  faSearch, 
  faTemperatureLow, 
  faBalanceScale 
} from '@fortawesome/free-solid-svg-icons';
import { sampleHerbs } from '../utils/data';
import '../styles/components/HerbRecognition.css';

function HerbRecognition() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleIdentify = () => {
    if (!selectedFile) {
      alert('Please select an image first!');
      return;
    }

    setLoading(true);
    setProgress(0);
    setResult(null);

    // Simulate API call with progress
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          
          // Simulate delay for backend processing
          setTimeout(() => {
            // Get random herb from sample data
            const randomHerb = sampleHerbs[Math.floor(Math.random() * sampleHerbs.length)];
            setResult(randomHerb);
            setLoading(false);
          }, 500);
        }
        return newProgress;
      });
    }, 100);
  };

  const getAccuracyBadgeColor = (confidence) => {
    if (confidence >= 90) return '#4caf50';  // High
    if (confidence >= 80) return '#ff9800';  // Good
    return '#f44336';  // Moderate
  };

  const getAccuracyBadgeText = (confidence) => {
    if (confidence >= 90) return 'High Accuracy';
    if (confidence >= 80) return 'Good Accuracy';
    return 'Moderate Accuracy';
  };

  return (
    <div id="recognition" className="feature-card">
      <div className="glow-effect"></div>
      <div className="card-header">
        <div className="card-badge">AI Vision</div>
        <h3>Herb Recognition</h3>
        <p>Upload an image of an herb to identify it</p>
        <FontAwesomeIcon icon={faCamera} className="card-icon" />
      </div>
      <div className="card-content">
        <div className="input-area">
          <label htmlFor="herb-image">Select or Drag & Drop an Image</label>
          <div 
            className="file-upload"
            onClick={() => fileInputRef.current.click()}
            onDrop={(e) => {
              e.preventDefault();
              const files = e.dataTransfer.files;
              if (files && files[0]) {
                fileInputRef.current.files = files;
                handleFileChange({ target: { files } });
              }
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
            <p>Drop your image here or click to browse</p>
            <span className="supported-formats">Supports: JPG, PNG, WEBP</span>
            <input 
              type="file" 
              id="herb-image" 
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        
        {imagePreview && (
          <div className="preview-container">
            <h4>Image Preview:</h4>
            <div className="image-frame">
              <img src={imagePreview} alt="Herb preview" />
            </div>
          </div>
        )}
        
        {loading && (
          <div className="loading">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
            <p>Analyzing your herb...</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
        
        {result && (
          <div className="result-container">
            <div className="result-header">
              <h4>Recognition Results</h4>
              <div 
                className="accuracy-badge"
                style={{ backgroundColor: getAccuracyBadgeColor(result.confidence) }}
              >
                {getAccuracyBadgeText(result.confidence)}
              </div>
            </div>
            <div className="herb-info">
              <div className="herb-image-container">
                <img 
                  className="herb-image" 
                  src={imagePreview || "/api/placeholder/200/200"} 
                  alt={result.name}
                />
              </div>
              <div className="herb-details">
                <div className="herb-name-container">
                  <h5>{result.name}</h5>
                  <span className="scientific-name">{result.scientific}</span>
                </div>
                <div className="herb-properties">
                  <span className="property">
                    <FontAwesomeIcon icon={faTemperatureLow} /> <span>{result.nature}</span>
                  </span>
                  <span className="property">
                    <FontAwesomeIcon icon={faBalanceScale} /> <span>{result.dosha}</span>
                  </span>
                </div>
                <p>{result.description}</p>
                <div className="confidence-meter">
                  <span>Confidence:</span>
                  <div className="meter">
                    <div className="meter-fill" style={{ width: `${result.confidence}%` }}></div>
                  </div>
                  <span>{result.confidence}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <button 
          className={`btn btn-primary ${!loading ? 'pulsing' : ''}`} 
          onClick={handleIdentify}
          disabled={loading || !selectedFile}
        >
          <FontAwesomeIcon icon={faSearch} /> Identify Herb
        </button>
      </div>
    </div>
  );
}

export default HerbRecognition;