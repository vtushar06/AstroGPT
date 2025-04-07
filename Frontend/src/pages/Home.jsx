// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Home.css"; // Assuming you have a CSS file for styles
// const Home = () => {
//   return (
//     <div className="container text-center mt-5">
//       <h1 className="display-4">Welcome to AstroGPT</h1>
//       <p className="lead">
//         Your one-stop solution for exploring the universe with AI-powered
//         insights.
//       </p>
//       <div className="mt-4">
//         <Link to="/login" className="btn btn-primary btn-lg mx-2">
//           Login
//         </Link>
//         <Link to="/register" className="btn btn-secondary btn-lg mx-2">
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Assuming you have a CSS file for styles

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to AstroGPT</h1>
      <p className="home-description">
        Your gateway to exploring the universe with AI-powered insights.
      </p>
      <div className="home-buttons">
        <Link to="/login" className="home-link">
          Login
        </Link>
        <Link to="/register" className="home-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
