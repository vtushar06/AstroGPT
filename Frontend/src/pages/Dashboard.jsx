import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard-style/Dashboard.css"; // Import your CSS file

// Import Header and other components
import Header from "../components/Dashboard/Header";
import HeroSection from "../components/Dashboard/HeroSection";
import BookingSessions from "../components/Dashboard/BookingSession";
import PaymentSection from "../components/Dashboard/PaymentSection";
import Footer from "../components/Dashboard/Footer";
import RashiScroller from "../components/Dashboard/RashiScroller"; // Import the RashiScroller component
import Astrologers from "../components/Dashboard/Astrologers";

const Dashboard = () => {
  const [message, setMessage] = useState(""); // Message fetched from backend

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await axios.get(
          "http://localhost:5000/api/auth/protected",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        console.error(error.message);
        setMessage("Access denied");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Header */}
      <Header message={message} />

      {/* Rashi Scroller Section */}
      <RashiScroller />

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Hero Section */}
        <HeroSection />

        {/* Astrologers Section */}
        <Astrologers />

        {/* Booking Sessions Section */}
        <BookingSessions />

        {/* Payment Section */}
        <PaymentSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/Dashboard-style/Dashboard.css"; // Import your CSS file

// const Dashboard = () => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("No token found");

//         const response = await axios.get(
//           "http://localhost:5000/api/auth/protected",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setMessage(response.data.message);
//       } catch (error) {
//         console.error(error.message);
//         setMessage("Access denied");
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-header">Dashboard</h1>
//       <p className="dashboard-message">{message}</p>
//     </div>
//   );
// };

// export default Dashboard;
