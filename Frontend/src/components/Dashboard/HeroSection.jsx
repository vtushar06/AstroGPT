import React from "react";
import DailyHoroscope from "./DailyHoroscope";
import KundliSection from "./KundliSection";
import "../../styles/Dashboard-style/HeroSection.css";
import DailyPanchang from "./DailyPanchang";
import BookPooja from "./BookPooja";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <DailyHoroscope />
      <KundliSection />
      <DailyPanchang />
      <BookPooja />
    </section>
  );
};

export default HeroSection;
