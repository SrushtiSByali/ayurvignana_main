import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import '../styles/index.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
    </div>
  );
};

export default HomePage;