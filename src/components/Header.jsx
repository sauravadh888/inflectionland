import React, { useState } from 'react';
import { Link } from 'wouter';
import './Header.css';
import inflectionLogo from '../assets/images/inflection-full-logo-v1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="ribbon-container">
        <Link href="/" className="logo">
          <img
            src={inflectionLogo}
            alt="Inflection Logo"
            className="logo-image"
          />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/athletes">Athletes</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
