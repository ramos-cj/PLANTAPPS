import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainScreen.css";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="overlay" />
      <div className="main-box">
        <img
          src={require("../assets/yucca-logo.png")}
          alt="Yucca Logo"
          className="yucca-logo"
        />
        <p className="main-subtext">Welcome To Yucca!</p>

        <button className="main-button" onClick={() => navigate("/login")}>Login</button>
        <button className="main-button" onClick={() => navigate("/signup")}>Sign Up</button>

        <p className="divider">or</p>

        <button className="google-button">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
