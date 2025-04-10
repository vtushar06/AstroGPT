import React from "react";
import "../../styles/Dashboard-style/Header.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* Wrap the logo with Link to navigate to the home page */}
      <div className="logo">
        <Link to="/">AstroGPT</Link>
      </div>
      <nav className="nav-links">
        <a href="#services">Book Services</a>
        <a href="#blog">Blog</a>
        <a href="#astrologers">Astrologers</a>

        <a href="#booking">Book Session</a>
        <a href="#payment">Payment</a>
      </nav>
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <span>John Doe</span>
      </div>
    </header>
  );
};

export default Header;
