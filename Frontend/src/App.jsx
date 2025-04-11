import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import KundliMatching from "./components/InnerPage/KundliMatching";
import HoroscopePage from "./components/InnerPage/HoroscopePage";
import PanchangPage from "./components/InnerPage/PanchangPage";
import Upgradingpage from "./components/InnerPage/Upgradingpage";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pages with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
        {/* Pages without Navbar */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kundlimatching" element={<KundliMatching />} />
        <Route path="/horoscope" element={<HoroscopePage />} />
        <Route path="/panchang" element={<PanchangPage />} />
        <Route path="/upgrading" element={<Upgradingpage />} />
      </Routes>
    </Router>
  );
};
export default App;
