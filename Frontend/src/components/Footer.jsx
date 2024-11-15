import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p>&copy; 2024 NoteHub. All rights reserved.</p>
      </div>
      <div className="footer-center">
        <p>Contact Us: support@notehub.com</p>
      </div>
      <div className="footer-right">
        <a href="#about" className="footer-link">About Us</a>
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#terms" className="footer-link">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
