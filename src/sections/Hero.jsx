// src/sections/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        The software that <span className="highlight">sparks</span> your imagination
      </h1>
      <p>
        Our landing page template works on all devices, so you only have to set it up once,
        <br />
        and get beautiful results forever.
      </p>

      <div className="cta-form">
        <input type="email" placeholder="Your email address..." />
        <button>Join the Waitlist</button>
      </div>

      <div className="social-proof">
        Join the <strong>2000 members</strong> who have already signed up
      </div>
    </section>
  );
};

export default Hero;
