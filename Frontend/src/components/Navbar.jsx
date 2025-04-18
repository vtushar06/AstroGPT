import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
// Import the SVG logo

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/login");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Updated Logo with SVG */}
        <NavLink to="/" className="navbar-logo">
          <img
            src="../../Icon/sun.png"
            alt="AstroGPT Logo"
            className="logo-icon"
          />
          <span className="logo-text">AstroGPT</span>
        </NavLink>

        <ul className="navbar-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
