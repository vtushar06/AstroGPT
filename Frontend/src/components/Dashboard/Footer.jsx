import React from "react";
import "../../styles/Dashboard-style/Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#horoscope">Daily Horoscope</a>
            </li>
            <li>
              <a href="#kundli">Kundli</a>
            </li>
            <li>
              <a href="#booking">Book a Session</a>
            </li>
            <li>
              <a href="#payment">Payment History</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@astrogpt.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Astro Street, Galaxy City</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} AstroGPT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
