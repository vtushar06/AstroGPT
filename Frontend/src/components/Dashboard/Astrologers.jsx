import React, { useState } from "react";
import "../../styles/Dashboard-style/Astrologers.css";

const Astrologers = () => {
  // Sample data for astrologers
  const astrologers = [
    {
      id: 1,
      name: "Dr. Aasha parikh",
      specialty: "Vedic Astrology",
      image: "../../../public/Astrologers/astro1.webp",
    },
    {
      id: 2,
      name: "Santosh Giri",
      specialty: "Numerology",
      image: "../../../public/Astrologers/astro1.jpg",
    },
    {
      id: 3,
      name: "Dr Smitha Jain",
      specialty: "Vedic Astrology",
      image: "../../../public/Astrologers/astro2.jpg",
    },
    {
      id: 4,
      name: "Aaishwarya Sharma",
      specialty: "Vedic Astrology",
      image: "../../../public/Astrologers/astro3.jpg",
    },
    {
      id: 5,
      name: "Dr Monali Garg",
      specialty: "Palmistry",
      image: "../../../public/Astrologers/astro4.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? astrologers.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === astrologers.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="astrologers" className="astrologers-section">
      <h2 className="astrologers-heading">OUR ASTROLOGERS</h2>
      <p className="astrologers-subheading">
        13000+ Best Astrologers from India for Online Consultation
      </p>
      <div className="carousel-container">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="carousel">
          {astrologers
            .slice(currentIndex, currentIndex + 3)
            .map((astrologer) => (
              <div key={astrologer.id} className="astrologer-card">
                <div className="image-placeholder">
                  {/* Replace with actual image URLs */}
                  <img src={astrologer.image} alt={astrologer.name} />
                </div>
                <h3>{astrologer.name}</h3>
                <p>{astrologer.specialty}</p>
              </div>
            ))}
        </div>
        <button className="arrow-btn right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Astrologers;
