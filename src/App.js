import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage.js';
import HerbRecognitionPage from './pages/HerbRecognitionPage';
import HealthRecommendationPage from './pages/HealthRecommendationPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/herb-recognition" element={<HerbRecognitionPage />} />
            <Route path="/health-recommendation" element={<HealthRecommendationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;