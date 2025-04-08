import React from "react";
import "../../styles/Dashboard-style/PaymentSection.css"; // Import your CSS file

const PaymentSection = () => {
  return (
    <section id="payment" className="payment-section">
      <h2>Payment History</h2>
      <p>View your transaction history and manage payments.</p>
      <button className="payment-button">View Payments</button>
    </section>
  );
};

export default PaymentSection;
