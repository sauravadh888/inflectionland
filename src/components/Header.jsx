// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import inflectionLogo from '../assets/images/inflection-full-logo-v1.png';
// Import Link from wouter
import { Link } from 'wouter';
import { Menu } from 'lucide-react';

const Header = () => {
  // Optional hamburger toggle, if you want mobile nav later
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      {/* Left: Logo */}
      <div className="header-left">
        <Link href="/" className="header-logo-link">
          <img
            src={inflectionLogo}
            alt="Inflection Logo"
            className="header-logo"
          />
        </Link>
      </div>

      {/* Right: Nav + Hamburger */}
      <div className="header-right">
        <nav className="header-nav">
          {/* Use <Link> so wouter handles navigation */}
          <Link href="/athletes">Athletes</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="hamburger-btn"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} className="hamburger-icon" />
        </button>
      </div>

      {/* If you want a mobile menu, conditionally show it here */}
      {menuOpen && (
        <div className="mobile-nav">
          <Link href="/athletes" onClick={() => setMenuOpen(false)}>Athletes</Link>
          <Link href="/agents" onClick={() => setMenuOpen(false)}>Agents</Link>
          <Link href="/colleges" onClick={() => setMenuOpen(false)}>Colleges</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
