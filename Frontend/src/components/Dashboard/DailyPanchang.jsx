import React from "react";
import "../../styles/Dashboard-style/DailyPanchang.css"; // Separate CSS file for Daily Panchang
import { useNavigate } from "react-router-dom";

const DailyPanchang = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/panchang");
  };
  return (
    <div className="daily-panchang">
      <h2>Daily Panchang</h2>
      <p>Check the auspicious timings and details for today.</p>
      <button onClick={handleClick} className="action-button">
        View Panchang
      </button>
    </div>
  );
};

export default DailyPanchang;
