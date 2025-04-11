import React from "react";
import "../../styles/Dashboard-style/PaymentSection.css";
import { useNavigate } from "react-router-dom";

const PaymentSection = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/upgrading");
  };
  return (
    <section id="payment" className="payment-section">
      <h2 className="payment-title">Payment Dashboard</h2>
      <div className="payment-cards">
        <div className="payment-card">
          <h3 className="payment-card-title">Recharge</h3>
          <p>Top-up your account balance or services easily.</p>
          <button onClick={handleClick} className="payment-btn">
            Recharge Now
          </button>
        </div>
        <div className="payment-card">
          <h3 className="payment-card-title">Wallet</h3>
          <p>Check your current wallet balance and manage funds.</p>
          <button onClick={handleClick} className="payment-btn">
            View Wallet
          </button>
        </div>
        <div className="payment-card">
          <h3 className="payment-card-title">Payment History</h3>
          <p>View your transaction history and receipts.</p>
          <button onClick={handleClick} className="payment-btn">
            View History
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
