import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">About AyurVignana</h3>
            <p className="footer-description">
              AyurVignana combines ancient Ayurvedic knowledge with modern technology to provide 
              accurate herb identification and personalized health recommendations.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/herb-recognition">Herb Recognition</Link>
              </li>
              <li>
                <Link to="/health-recommendation">Health Recommendation</Link>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contact Us</h3>
            <p className="contact-info">
              <i className="fas fa-envelope"></i> info@ayurvignana.com
            </p>
            <p className="contact-info">
              <i className="fas fa-phone"></i> +91 123 456 7890
            </p>
            <p className="contact-info">
              <i className="fas fa-map-marker-alt"></i> Bengaluru, Karnataka, India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} AyurVignana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;