import React from "react";
import DailyHoroscope from "./DailyHoroscope";
import KundliSection from "./KundliSection";
import "../../styles/Dashboard-style/HeroSection.css";
import DailyPanchang from "./DailyPanchang";
import BookPooja from "./BookPooja";
import BlogSection from "./BlogSection";

// const HeroSection = () => {
//   return (
//     <>
//       <div id="services" className="hero-heading">
//         <h2>Book Our Services</h2>
//         <p>As your wish</p>
//       </div>
//       <section className="hero-section">
//         <DailyHoroscope />
//         <KundliSection />
//         <DailyPanchang />
//         <BookPooja />
//       </section>
//       <BlogSection />
//     </>
//   );
// };
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-heading">
        <h1>Book Our Services</h1>
        <p>As you wish</p>
      </div>
      <DailyHoroscope />
      <KundliSection />
      <DailyPanchang />
      <BookPooja />
    </section>
  );
};
export default HeroSection;
