import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-logo">
          <FontAwesomeIcon icon={faSeedling} />
          <h3>AyurVignana</h3>
        </div>
        <div className="footer-quote">
          "Where modern technology meets ancient wisdom"
        </div>
        <div className="footer-text">
          <p>&copy; {currentYear} AyurVignana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;