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
              <a href="#services">Book Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#astrologers">Astrologers</a>
            </li>
            <li>
              <a href="#booking">Book Session</a>
            </li>
            <li>
              <a href="#payment">Payment</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@astrogpt.com</p>
          <p>Phone: +91 9105725631</p>
          <p>Address: New Delhi,India</p>
        </div>

        {/* Social Media Links */}
        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <ul className="social-links">
            {/* LinkedIn Profile */}
            <li>
              <a
                href="https://www.linkedin.com/in/tushar-verma-851a76338/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src="./../../../Icon/linkedin.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
                LinkedIn
              </a>
            </li>

            {/* GitHub Profile */}
            <li>
              <a
                href="https://github.com/vtushar06"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src="./../../../Icon/github.png"
                  alt="GitHub"
                  className="social-icon"
                />
                GitHub
              </a>
            </li>

            {/* Personal Website */}
            <li>
              <a
                href="https://personal-website-chi-cyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src="./../../../Icon/coding.png"
                  alt="Website"
                  className="social-icon"
                />
                Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
