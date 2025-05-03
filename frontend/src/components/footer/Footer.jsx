import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {

  const newsletterSectionStyle = {
    backgroundImage: `url(${assets.footer_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };

  return (
    <footer className="footer-container">
      <div className="newsletter-section" style={newsletterSectionStyle}>
        <h2>Join our newsletter</h2>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      <div className="footer-bar">
        <div className="footer-left">
          <span className="footer-brand">Fresh<span id='footer-brand-span'>Khana</span></span>
          <span className="footer-text-subtle"> 2025 All Rights Reserved.</span>
          <span className="footer-text-subtle">Made by Gagan1642</span>
        </div>
        <div className="footer-right">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Contact Us</a>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook">F</a>
            <a href="#" aria-label="Instagram">I</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;