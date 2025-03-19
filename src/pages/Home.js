import React from "react";
import "../styles/Home.css"; // Importing Home.css
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Find Your Dream Property</h1>
      <p className="home-subtitle">
        Browse thousands of properties for sale, rent, or investment opportunities.
      </p>
      <button className="home-button" onClick={() => navigate("/listings")}>
        Explore Properties
      </button>
    </div>
  );
};

export default Home;
