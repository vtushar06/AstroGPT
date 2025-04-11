import React, { useEffect, useState } from "react";
import "../../styles/InnerStyle/PanchangPage.css"; // Import your CSS file
const PanchangPage = () => {
  const [panchangData, setPanchangData] = useState(null);

  useEffect(() => {
    const fetchPanchang = async () => {
      try {
        const response = await fetch(
          "https://api.vedicastroapi.com/v1/panchang?day=11&month=4&year=2025&place=Delhi",
          {
            headers: {
              Authorization: "Bearer YOUR_API_KEY",
            },
          }
        );
        const data = await response.json();
        setPanchangData(data);
      } catch (error) {
        console.error("Error fetching Panchang:", error);
      }
    };

    fetchPanchang();
  }, []);

  return (
    <div className="panchang-container">
      <h1>Daily Panchang</h1>
      {panchangData ? (
        <div className="panchang-details">
          <p>
            <strong>Tithi:</strong> {panchangData.tithi}
          </p>
          <p>
            <strong>Nakshatra:</strong> {panchangData.nakshatra}
          </p>
          <p>
            <strong>Yoga:</strong> {panchangData.yoga}
          </p>
          <p>
            <strong>Sunrise:</strong> {panchangData.sunrise}
          </p>
          <p>
            <strong>Sunset:</strong> {panchangData.sunset}
          </p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading Panchang...</p>
      )}
    </div>
  );
};

export default PanchangPage;
