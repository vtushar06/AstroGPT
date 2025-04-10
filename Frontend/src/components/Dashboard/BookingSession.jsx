import React from "react";
import "../../styles/Dashboard-style/BookingSession.css"; // Import your CSS file

const BookingSessions = () => {
  return (
    <section id="booking" className="booking-sessions">
      <div className="container">
        <h2 className="section-title">Book a Session</h2>
        <p className="section-description">
          Connect with expert astrologers for personalized guidance on your
          career, relationships, health, and more. Choose from a variety of
          services tailored to your needs.
        </p>

        <div className="booking-options">
          <div className="option-card">
            <h3>Live Chat</h3>
            <p>
              Instantly connect with astrologers via chat for quick guidance.
            </p>
            <button className="action-button">Start Chat</button>
          </div>
          <div className="option-card">
            <h3>Video Call</h3>
            <p>Schedule a detailed video consultation for in-depth analysis.</p>
            <button className="action-button">Book Video Call</button>
          </div>
          <div className="option-card">
            <h3>Phone Call</h3>
            <p>Speak directly with astrologers for personalized advice.</p>
            <button className="action-button">Call Now</button>
          </div>
        </div>

        <p className="note">
          * First-time users can avail a 50% discount on their first session!
        </p>
      </div>
    </section>
  );
};

export default BookingSessions;
