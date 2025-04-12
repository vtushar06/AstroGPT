import React, { useState } from "react";
import "../../styles/Dashboard-style/Header.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Wrap the logo with Link to navigate to the home page */}
      <div className="logo">
        <img
          src="../../../Icon/sun.png"
          alt="AstroGPT Logo"
          className="logo-icon"
        />
        <Link to="/">AstroGPT</Link>
      </div>

      {/* Menu Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#services">Book Services</a>
        <a href="#blog">Blog</a>
        <a href="#astrologers">Astrologers</a>
        <a href="#booking">Book Session</a>
        <a href="#payment">Payment</a>
        <a href="#about">About</a>
      </nav>

      {/* Profile Section */}
      <div className="profile">
        <img
          src="../../../Astrologers/my-profile-img.jpeg"
          alt="Profile"
          className="profile-pic"
        />
        <span>Tushar Verma</span>
      </div>
    </header>
  );
};

export default Header;
