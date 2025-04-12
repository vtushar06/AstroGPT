// import React from "react";
// import "../../styles/Dashboard-style/KundliSection.css"; // Import your CSS file

// const KundliSection = () => {
//   return (
//     <div className="kundli-section">
//       <h2>Kundli</h2>
//       <p>Generate your detailed birth chart.</p>
//     </div>
//   );
// };

// export default KundliSection;
// import React from "react";
// import "../../styles/Dashboard-style/KundliSection.css"; // Import your CSS file

// const KundliSection = () => {
//   return (
//     <div className="kundli-section">
//       <h2>Kundli</h2>
//       <p>Generate your detailed birth chart.</p>
//       <button className="action-button">Generate Kundli</button>
//     </div>
//   );
// };

// export default KundliSection;
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../../styles/Dashboard-style/KundliSection.css"; // Import your CSS file

const KundliSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleButtonClick = () => {
    navigate("/kundlimatching"); // Navigate to the Kundli Matching page
  };

  return (
    <div className="kundli-section">
      <h2>Kundli Matching</h2>
      <p>Match to your Loved ones through power of Ai</p>
      <button className="action-button" onClick={handleButtonClick}>
        Generate Kundli
      </button>
    </div>
  );
};

export default KundliSection;
