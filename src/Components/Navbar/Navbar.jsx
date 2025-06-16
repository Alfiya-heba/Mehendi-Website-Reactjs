import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav class="navbar">
  <div class="logo">Welcome to <span>Mehendi by Heba</span></div>
  <div class="hamburger" onclick="toggleSidebar()">☰</div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#home">Home</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#about">About Me</a></li>
    <li><a href="#bookings">Bookings</a></li>
    <li><a href="#feedback">Feedback</a></li>
  </ul>
</nav>
  );
};

export default Navbar;
