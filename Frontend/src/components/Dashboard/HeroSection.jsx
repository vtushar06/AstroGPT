import React from "react";
import DailyHoroscope from "./DailyHoroscope";
import KundliSection from "./KundliSection";
import "../../styles/Dashboard-style/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <DailyHoroscope />
      <KundliSection />
    </section>
  );
};

export default HeroSection;
