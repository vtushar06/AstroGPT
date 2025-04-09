import React from "react";
import DailyHoroscope from "./DailyHoroscope";
import KundliSection from "./KundliSection";
import "../../styles/Dashboard-style/HeroSection.css";
import DailyPanchang from "./DailyPanchang";
import BookPooja from "./BookPooja";
import BlogSection from "./BlogSection";

const HeroSection = () => {
  return (
    <>
      <div className="hero-heading">
        <h2>Book Our Services</h2>
        <p>As your wish</p>
      </div>
      <section className="hero-section">
        <DailyHoroscope />
        <KundliSection />
        <DailyPanchang />
        <BookPooja />
      </section>
      <BlogSection />
    </>
  );
};

export default HeroSection;
