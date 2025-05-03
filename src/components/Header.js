import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">AyurVignana</span>
        </Link>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/herb-recognition" 
                className={location.pathname === '/herb-recognition' ? 'active' : ''}
                onClick={closeMenu}
              >
                Herb Recognition
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/health-recommendation" 
                className={location.pathname === '/health-recommendation' ? 'active' : ''}
                onClick={closeMenu}
              >
                Health Recommendation
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;