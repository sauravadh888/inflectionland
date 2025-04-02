import React from 'react';
import './Header.css';
import inflectionLogo from '../assets/images/inflection-full-logo-v1.png';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-container">
      {/* Left: Logo */}
      <div className="header-left">
      <a href="/" className="header-logo-link">
  <img
    src={inflectionLogo}
    alt="Inflection Logo"
    className="header-logo"
  />
</a>

      </div>

      {/* Right: Nav + Hamburger */}
      <div className="header-right">
        <nav className="header-nav">
          {['Athletes', 'Agents', 'Colleges', 'Contact'].map((label) => (
            <a href="#" key={label}>{label}</a>
          ))}
        </nav>

        <button className="hamburger-btn" aria-label="Menu">
          <Menu size={24} className="hamburger-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;




