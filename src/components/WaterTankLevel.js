// src/components/WaterTankLevel.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "./Header"; // ✅ Import Header component
import "../styles/WaterTankLevel.css";

const WaterTankLevel = () => {
  const navigate = useNavigate();
  const waterLevel = 72; // 🔧 hardcoded percentage value

  return (
    <>
      <Header /> {/* ✅ Display header at the top */}
      <div className="watertank-container">
        <div className="overlay" />
        <div className="watertank-box">
          <h2 className="watertank-title">Water Tank Level</h2>
          <div className="watertank-progress">
            <CircularProgressbar
              value={waterLevel}
              text={`${waterLevel}%`}
              styles={buildStyles({
                pathColor: "#00BFFF",
                textColor: "#fff",
                trailColor: "#444",
              })}
            />
          </div>
          <p className="watertank-text">Current water tank status</p>
          <button
            onClick={() => navigate("/dashboard")}
            className="close-button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};

export default WaterTankLevel;
