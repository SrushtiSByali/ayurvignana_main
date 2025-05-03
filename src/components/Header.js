import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Header.css';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <FontAwesomeIcon icon={faSeedling} />
          <h1>AyurVignana</h1>
        </div>
        <nav>
          <input 
            type="checkbox" 
            id="nav-toggle" 
            className="nav-toggle"
            checked={navOpen}
            onChange={toggleNav}
          />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <ul className={navOpen ? 'nav-open' : ''}>
            <li><Link to="/" className="active" onClick={() => setNavOpen(false)}>Home</Link></li>
            <li><a href="#recognition" onClick={() => setNavOpen(false)}>Herb Recognition</a></li>
            <li><a href="#recommendation" onClick={() => setNavOpen(false)}>Health Recommendation</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;