import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background-animation">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        <Header />
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <FeaturesSection />
                  <HowItWorks />
                </>
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;