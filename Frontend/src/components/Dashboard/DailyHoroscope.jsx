import React from "react";

import "../../styles/Dashboard-style/DailyHoroscope.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
const DailyHoroscope = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/horoscope");
  };
  return (
    <div className="daily-horoscope">
      <h2>Daily Horoscope</h2>
      <p>Your personalized horoscope for today.</p>
      <button className="action-button" onClick={handleClick}>
        View Horoscope
      </button>
    </div>
  );
};

export default DailyHoroscope;
