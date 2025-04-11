import React from "react";
import "../../styles/Dashboard-style/WhyAstrology.css"; // Add custom styles for this component if needed

const WhyAstrology = () => {
  return (
    <section id="about" className="why-astrology-section">
      <div className="container">
        <h2 className="section-title">Why Astrology?</h2>
        <p className="intro-text">
          Astrology is a fascinating predictive science that connects the
          movements of celestial bodies—like planets and stars—to events in
          human lives. It offers insights into personality, relationships,
          career, and more, making it a powerful tool for self-discovery and
          guidance.
        </p>

        <div className="content-block">
          <h3>The Basics of Astrology</h3>
          <p>
            Astrology focuses on nine significant celestial entities, known as
            Navagrahas:
          </p>
          <ul>
            <li>
              <strong>Sun (Surya)</strong>
            </li>
            <li>
              <strong>Moon (Chandra)</strong>
            </li>
            <li>
              <strong>Mars (Mangala)</strong>
            </li>
            <li>
              <strong>Mercury (Budha)</strong>
            </li>
            <li>
              <strong>Jupiter (Brihaspati)</strong>
            </li>
            <li>
              <strong>Venus (Shukra)</strong>
            </li>
            <li>
              <strong>Saturn (Shani)</strong>
            </li>
            <li>
              <strong>Rahu</strong>
            </li>
            <li>
              <strong>Ketu</strong>
            </li>
          </ul>
          <p>
            These planets interact with 12 houses in a Kundli (birth chart),
            each representing different life aspects like personality,
            creativity, and relationships.
          </p>
        </div>

        <div className="content-block">
          <h3>Why People Believe in Astrology</h3>
          <ul>
            <li>
              <strong>Self-Discovery:</strong> Astrology helps individuals
              understand their strengths, weaknesses, and purpose.
            </li>
            <li>
              <strong>Spiritual Connection:</strong> It provides a sense of
              harmony with the cosmos.
            </li>
            <li>
              <strong>Guidance:</strong> Many turn to astrology for clarity
              during uncertain times.
            </li>
            <li>
              <strong>Cultural Relevance:</strong> Astrology remains deeply
              rooted in traditions while evolving with modern tools.
            </li>
          </ul>
        </div>

        <div className="content-block">
          <h3>Astrological Services at AstroGPT</h3>
          <p>AstroGPT brings astrology to your fingertips with:</p>
          <ul>
            <li>Personalized Kundli generation</li>
            <li>Daily horoscopes</li>
            <li>
              Live consultations with expert astrologers specializing in Vedic
              astrology, tarot reading, numerology, and more.
            </li>
          </ul>
          <p>
            Our platform is designed to make astrology accessible globally while
            maintaining authenticity and accuracy.
          </p>
        </div>

        <div className="content-block">
          <h3>Embrace the Cosmic Connection</h3>
          <p>
            Astrology bridges the gap between the physical and spiritual world,
            offering comfort and clarity in life’s journey. Whether you seek
            answers about relationships, career, or personal growth—AstroGPT is
            your trusted guide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAstrology;
