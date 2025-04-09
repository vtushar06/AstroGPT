import React from "react";
import "../../styles/Dashboard-style/DailyPanchang.css"; // Separate CSS file for Daily Panchang

const DailyPanchang = () => {
  return (
    <div className="daily-panchang">
      <h2>Daily Panchang</h2>
      <p>Check the auspicious timings and details for today.</p>
      <button className="action-button">View Panchang</button>
    </div>
  );
};

export default DailyPanchang;
