import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="badge">Waitlist v1 · Coming Soon</div>
      <h1 className="hero-headline">The software that sparks your imagination</h1>
      <p className="hero-subtext">
        Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
      </p>

      <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Your email..."
          className="email-input"
          required
        />
        <button type="submit" className="waitlist-button">
          Join The Waitlist
        </button>
      </form>
    </section>
  );
};

export default Hero;
