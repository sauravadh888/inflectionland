// src/views/HomePage.jsx
import React from 'react';
import './HomePage.css';


// Import the components/sections you already have
import Header from '../components/Header';
import Hero from '../sections/Hero';
import AvatarCluster from '../components/AvatarCluster';
import VisualSection from '../sections/VisualSection';
import Footer from '../components/Footer';
import WaitlistForm from '../components/WaitlistForm';
import mainImage from '../assets/images/main_image.v1.png';


const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />

      {/* Add the new image at the top of the landing page */}
      <div className="landing-image-wrapper">
        <img
          src={mainImage}
          alt="Main Landing Visual"
          className="landing-image"
        />
      </div>

      <Hero />
      <AvatarCluster />
      <VisualSection />
      <Footer />
      <WaitlistForm />
    </div>
  );
};

export default HomePage;

