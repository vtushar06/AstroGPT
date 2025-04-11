import React from "react";
import "../../styles/Dashboard-style/Header.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* Wrap the logo with Link to navigate to the home page */}
      <div className="logo">
        <img
          src="../../../public/Icon/sun.png"
          alt="AstroGPT Logo"
          className="logo-icon"
        />
        <Link to="/">AstroGPT</Link>
      </div>
      <nav className="nav-links">
        <a href="#services">Book Services</a>
        <a href="#blog">Blog</a>
        <a href="#astrologers">Astrologers</a>

        <a href="#booking">Book Session</a>
        <a href="#payment">Payment</a>
        <a href="#about">About</a>
      </nav>
      <div className="profile">
        <img
          src="../../../public/Astrologers/astro2.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <span>Dr Smitha Jain</span>
      </div>
    </header>
  );
};

export default Header;
