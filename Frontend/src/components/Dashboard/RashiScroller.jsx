import React, { useState } from "react";
import "../../styles/Dashboard-style/RashiScroller.css"; // Import custom styles

const rashis = [
  { id: "aries", name: "Aries", img: "../../../aries.jpg" },
  { id: "taurus", name: "Taurus", img: "../../../tauras.jpg" },
  { id: "gemini", name: "Gemini", img: "../../../gemini.jpg" },
  { id: "cancer", name: "Cancer", img: "../../../cancer.jpg" },
  { id: "leo", name: "Leo", img: "../../../leo.webp" },
  { id: "virgo", name: "Virgo", img: "../../../virgo.jpg" },
  { id: "libra", name: "Libra", img: "../../../libra.jpg" },
  { id: "scorpio", name: "Scorpio", img: "../../../scorpio.jpg" },
  {
    id: "sagittarius",
    name: "Sagittarius",
    img: "../../../sagittarius.jpg",
  },
  { id: "capricorn", name: "Capricorn", img: "../../../capricorn.webp" },
  { id: "aquarius", name: "Aquarius", img: "../../../pisces.jpg" },
  { id: "pisces", name: "Pisces", img: "../../../pisces.jpg" },
];

const RashiScroller = () => {
  const [selectedRashi, setSelectedRashi] = useState(null);
  const [horoscopeData, setHoroscopeData] = useState(null);

  // Function to fetch horoscope data from an API
  const fetchHoroscope = async (rashi) => {
    try {
      const apiKey = "DEMO_KEY"; // Replace with your NASA API key or relevant API key
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await response.json();
      setHoroscopeData({ rashi, data });
    } catch (error) {
      console.error("Error fetching horoscope data:", error);
    }
  };

  // Handle click on a Rashi item
  const handleClick = (rashi) => {
    setSelectedRashi(rashi);
    fetchHoroscope(rashi.name);
  };

  return (
    <div className="rashi-scroller">
      {/* Infinite scrolling track */}
      <div className="rashi-track">
        {/* Render all Rashis */}
        {rashis.map((rashi) => (
          <div
            key={rashi.id}
            className={`rashi-item ${
              selectedRashi?.id === rashi.id ? "active" : ""
            }`}
            onClick={() => handleClick(rashi)}
          >
            <img src={rashi.img} alt={rashi.name} className="rashi-img" />
            <p>{rashi.name}</p>
          </div>
        ))}
        {/* Duplicate items for seamless infinite scrolling */}
        {rashis.map((rashi) => (
          <div
            key={`${rashi.id}-duplicate`}
            className="rashi-item"
            onClick={() => handleClick(rashi)}
          >
            <img src={rashi.img} alt={rashi.name} className="rashi-img" />
            <p>{rashi.name}</p>
          </div>
        ))}
      </div>

      {/* Display fetched horoscope data */}
      {horoscopeData && (
        <div className="horoscope-data">
          <h2>{horoscopeData.rashi} Horoscope</h2>
          <p>{horoscopeData.data.explanation}</p>
          <img src={horoscopeData.data.url} alt="Horoscope Image" />
        </div>
      )}
    </div>
  );
};

export default RashiScroller;
