import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PlantListScreen.css";
import Header from "../components/Header";

const plants = [
  { id: "plant1", name: "Zone 1 - Left Rear", label: "PLANT 1" },
  { id: "plant2", name: "Zone 1 - Center Rear", label: "PLANT 2" },
  { id: "plant3", name: "Zone 1 - Right Rear", label: "PLANT 3" },
  { id: "plant4", name: "Zone 2 - Front Left", label: "PLANT 4" },
  { id: "plant5", name: "Zone 2 - Front Right", label: "PLANT 5" },
  { id: "plant6", name: "Zone 3 - Center", label: "PLANT 6" },
];

const PlantListScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="plantlist-container">
        <div className="overlay" />
        <div className="plantlist-box">
          <img
            src={require("../assets/yucca-logo.png")}
            alt="Yucca Logo"
            className="yucca-logo1"
          />

<p className="bottom-text">Please select plant</p>

          {plants.map((plant) => (
            <button
              key={plant.id}
              onClick={() => navigate(`/plant/${plant.id}`)}
              className="plant-button"
            >
              {plant.label}
            </button>
          ))}

          <div className="tank-buttons">
            <button
              className="tank-button"
              onClick={() => navigate("/water-tank")}
            >
              View Water Tank Level
            </button>
            <button
              className="tank-button"
              onClick={() => navigate("/fertility-tank")}
            >
              View Fertility Tank Level
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantListScreen;
