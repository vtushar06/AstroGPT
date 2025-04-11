import React, { useState } from "react";
import "../../styles/InnerStyle/KundliMatching.css";

const KundliMatching = () => {
  const [savedMatches, setSavedMatches] = useState("");

  const handleMatchHoroscope = async () => {
    const boyName = document.getElementById("boyName").value;
    const boyBirthDate = document.getElementById("boyBirthDate").value;
    const boyBirthTime = document.getElementById("boyBirthTime").value;
    const boyBirthPlace = document.getElementById("boyBirthPlace").value;

    const girlName = document.getElementById("girlName").value;
    const girlBirthDate = document.getElementById("girlBirthDate").value;
    const girlBirthTime = document.getElementById("girlBirthTime").value;
    const girlBirthPlace = document.getElementById("girlBirthPlace").value;

    if (
      !boyName ||
      !boyBirthDate ||
      !boyBirthTime ||
      !boyBirthPlace ||
      !girlName ||
      !girlBirthDate ||
      !girlBirthTime ||
      !girlBirthPlace
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {
      // Replace 'YOUR_API_KEY' with your actual API key
      const apiKey = "YOUR_API_KEY";
      const response = await fetch(
        `https://api.example.com/kundli-match?apiKey=${apiKey}&boyName=${boyName}&boyDOB=${boyBirthDate}T${boyBirthTime}&boyPlace=${boyBirthPlace}&girlName=${girlName}&girlDOB=${girlBirthDate}T${girlBirthTime}&girlPlace=${girlBirthPlace}`
      );

      if (response.ok) {
        const data = await response.json();
        setSavedMatches(
          `<h3>Kundli Match Result:</h3>
          <p><strong>Boy's Name:</strong> ${data.boy.name}</p>
          <p><strong>Girl's Name:</strong> ${data.girl.name}</p>
          <p><strong>Compatibility Score:</strong> ${data.compatibilityScore}</p>
          <p>${data.resultMessage}</p>`
        );
      } else {
        alert("Failed to fetch Kundli match results. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="kundli-container">
      <h1>Kundli Matching</h1>
      <p>Find your right one, through matchmaking</p>
      <div className="form-section">
        <h2>Fill Up Partner's Detail</h2>

        {/* Boy's Details */}
        <div className="details-section">
          <h3>Boy's Detail</h3>
          <label>Name:</label>
          <input type="text" id="boyName" placeholder="Enter name" />
          <label>Birth Details:</label>
          <input type="date" id="boyBirthDate" />
          <input type="time" id="boyBirthTime" />
          <label>Birth Place:</label>
          <input
            type="text"
            id="boyBirthPlace"
            placeholder="Enter birth place"
          />
        </div>

        {/* Girl's Details */}
        <div className="details-section">
          <h3>Girl's Detail</h3>
          <label>Name:</label>
          <input type="text" id="girlName" placeholder="Enter name" />
          <label>Birth Details:</label>
          <input type="date" id="girlBirthDate" />
          <input type="time" id="girlBirthTime" />
          <label>Birth Place:</label>
          <input
            type="text"
            id="girlBirthPlace"
            placeholder="Enter birth place"
          />
        </div>

        {/* Match Horoscope Button */}
        <button onClick={handleMatchHoroscope}>Match Horoscope</button>
      </div>

      {/* Saved Matches Section */}
      <div className="saved-matches-section">
        <h2>Saved Matches</h2>
        {savedMatches ? (
          <div dangerouslySetInnerHTML={{ __html: savedMatches }}></div>
        ) : (
          <>
            <p>Please login to check your saved horoscope.</p>
            <button className="login-btn">Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default KundliMatching;
