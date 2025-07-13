import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Welcome to <span>Mehendi by Heba</span></div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#bookings" onClick={closeMenu}>Bookings</a></li>
        <li><a href="#feedback" onClick={closeMenu}>Feedback</a></li>
      </ul>
    </nav>
    // <hr />
  );
};

export default Navbar;
