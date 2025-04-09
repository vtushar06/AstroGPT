import React from "react";
import "../../styles/Dashboard-style/BookPooja.css"; // Separate CSS file for Book Pooja

const BookPooja = () => {
  return (
    <div className="book-pooja">
      <h2>Book a Pooja</h2>
      <p>Schedule a pooja with our expert priests.</p>
      <button className="action-button">Book Now</button>
    </div>
  );
};

export default BookPooja;
