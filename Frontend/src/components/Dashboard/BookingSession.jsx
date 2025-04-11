import React from "react";
import "../../styles/Dashboard-style/BookingSession.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const BookingSession = () => {
  const sessions = [
    {
      id: "1",
      title: "Book a Video Call",
      details:
        "Schedule a video call with our experts to discuss your requirements in detail.",
    },
    {
      id: "2",
      title: "Book a Call",
      details:
        "Reserve a time slot for a phone call to talk about your needs and queries.",
    },
    {
      id: "3",
      title: "Past Calls",
      details:
        "View details of your previous calls and access any relevant notes or recordings.",
    },
  ];
  const Navigate = useNavigate(); // Initialize navigation
  const handleClick = () => {
    Navigate("/upgrading");
  };
  return (
    <div id="booking" className="booking-session">
      {/* Title */}
      <h1 className="booking-session-title">Manage Your Sessions</h1>

      <p className="booking-subheading">Manage Your Calls and History</p>

      {/* Cards Section */}
      <div className="booking-cards">
        {sessions.map((session, index) => (
          <div className="booking-card" key={index}>
            <h2 className="booking-card-title">{session.title}</h2>
            <p>{session.details}</p>
            {session.id !== "3" && ( // Hide button for Past Calls
              <button className="booking-btn" onClick={handleClick}>
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSession;
