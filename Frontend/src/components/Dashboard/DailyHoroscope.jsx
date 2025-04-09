// import React from "react";
// import "../../styles/Dashboard-style/DailyHoroscope.css";

// const DailyHoroscope = () => {
//   return (
//     <div className="daily-horoscope">
//       <h2>Daily Horoscope</h2>
//       <p>Your personalized horoscope for today.</p>
//     </div>
//   );
// };

// export default DailyHoroscope;
// import React, { useState, useEffect } from "react";
import "../../styles/Dashboard-style/DailyHoroscope.css";

const DailyHoroscope = () => {
  //   const [blogContent, setBlogContent] = useState("");

  //   // Simulate fetching daily horoscope content
  //   useEffect(() => {
  //     // Replace this with an API call to fetch daily horoscope content
  //     const fetchDailyHoroscope = async () => {
  //       const response = await fetch("https://api.example.com/daily-horoscope"); // Example API URL
  //       const data = await response.json();
  //       setBlogContent(data.content || "Stay tuned for your daily updates!");
  //     };

  //     fetchDailyHoroscope();
  //   }, []);

  return (
    <div className="daily-horoscope">
      <h2>Daily Horoscope</h2>
      <p>Your personalized horoscope for today.</p>
      <button className="action-button">View Horoscope</button>
    </div>
  );
};

export default DailyHoroscope;
