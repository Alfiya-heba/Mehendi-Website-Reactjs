import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Mehendi by Heba</h3>
        <p>Adorning hands, celebrating hearts.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#bookings">Bookings</a>
          <a href="#feedback">Feedback</a>
        </div>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          {/* Add more icons as needed */}
        </div>

        <p className="footer-credit">© {new Date().getFullYear()} Mehendi by Heba. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
