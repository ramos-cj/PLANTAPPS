import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/PlantDetailsScreen.css";
import Header from "../components/Header";

const plantData = {
  plant1: { zone: "Zone 1", sensorId: "ID 1", location: "left rear, bed 1", fertility: 16, waterLevel: 40, lastFertilized: "April 27, 2025 - 10:30 AM", lastWatered: "April 28, 2025 - 9:00 AM", color: "#FF4C4C" },
  plant2: { zone: "Zone 1", sensorId: "ID 2", location: "center rear, bed 1", fertility: 25, waterLevel: 55, lastFertilized: "April 26, 2025 - 4:45 PM", lastWatered: "April 28, 2025 - 9:15 AM", color: "#FFA500" },
  plant3: { zone: "Zone 1", sensorId: "ID 3", location: "right rear, bed 1", fertility: 63, waterLevel: 72, lastFertilized: "April 28, 2025 - 8:00 AM", lastWatered: "April 28, 2025 - 9:05 AM", color: "#FFD700" },
  plant4: { zone: "Zone 2", sensorId: "ID 4", location: "front left, bed 2", fertility: 35, waterLevel: 65, lastFertilized: "April 25, 2025 - 2:30 PM", lastWatered: "April 28, 2025 - 8:45 AM", color: "#00FF99" },
  plant5: { zone: "Zone 2", sensorId: "ID 5", location: "front right, bed 2", fertility: 50, waterLevel: 70, lastFertilized: "April 27, 2025 - 11:10 AM", lastWatered: "April 28, 2025 - 9:25 AM", color: "#00FFCC" },
  plant6: { zone: "Zone 3", sensorId: "ID 6", location: "center, bed 3", fertility: 78, waterLevel: 88, lastFertilized: "April 26, 2025 - 3:15 PM", lastWatered: "April 28, 2025 - 9:40 AM", color: "#66CCFF" },
};

const PlantDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = plantData[id];

  if (!plant) return <p>Plant not found</p>;

  return (
    <>
      <Header /> {/* ✅ Place the Header outside the container */}
      <div className="plant-detail-container">
        <div className="plant-detail-content">
          <h3>{plant.zone}</h3>

          <div className="progress-row">
            <div className="progress-item">
              <h2>Soil Fertility</h2>
              <div className="progress-container">
                <CircularProgressbar
                  value={plant.fertility}
                  text={`${plant.fertility}%`}
                  styles={buildStyles({
                    pathColor: plant.color,
                    textColor: "#fff",
                    trailColor: "#555",
                  })}
                />
              </div>
            </div>

            <div className="progress-item">
              <h2>Water Level</h2>
              <div className="progress-container">
                <CircularProgressbar
                  value={plant.waterLevel}
                  text={`${plant.waterLevel}%`}
                  styles={buildStyles({
                    pathColor: "#00BFFF",
                    textColor: "#fff",
                    trailColor: "#555",
                  })}
                />
              </div>
            </div>
          </div>

          <p><strong>Sensor ID:</strong> {plant.sensorId}</p>
          <p><strong>Location:</strong> {plant.location}</p>
          <hr className="divider" />
          <p><strong>Last Fertilized:</strong> {plant.lastFertilized}</p>
          <p><strong>Last Watered:</strong> {plant.lastWatered}</p>

          <div className="button-group">
            <button className="action-button">WATER</button>
            <button className="action-button">FERTILIZE</button>
          </div>

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

export default PlantDetailScreen;
