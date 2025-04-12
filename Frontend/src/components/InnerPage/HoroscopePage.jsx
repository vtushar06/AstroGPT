import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/InnerStyle/HoroscopePage.css";

const HoroscopePage = () => {
  const [horoscopes, setHoroscopes] = useState([]);
  const rashis = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  useEffect(() => {
    let isMounted = true;

    const fetchHoroscopes = async () => {
      try {
        const promises = rashis.map((rashi) =>
          axios.get(
            `https://rapidapi.com/Alejandro99aru/api/horoscope-astrology"/today/${rashi}`
          )
        );
        const responses = await Promise.all(promises);
        if (isMounted) {
          const data = responses.map((response) => ({
            rashi: response.data.sunsign,
            date: response.data.date,
            horoscope: response.data.horoscope,
          }));
          setHoroscopes(data.sort((a, b) => a.rashi.localeCompare(b.rashi)));
        }
      } catch (error) {
        console.error("Error fetching horoscopes:", error);
      }
    };

    fetchHoroscopes();

    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="horoscope-container">
      <h1>Today's Horoscope for All Rashis</h1>
      <div className="rashi-grid">
        {horoscopes.map((item, index) => (
          <div key={index} className="horoscope-card">
            <h2>{item.rashi}</h2>
            <small className="date">Date: {item.date}</small>
            <p>{item.horoscope}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoroscopePage;
