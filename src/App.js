import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignUpScreen";
import PlantListScreen from "./components/PlantListScreen";
import PlantDetailScreen from "./components/PlantDetailsScreen";
import WaterTankLevel from "./components/WaterTankLevel";
import FertilityTankLevel from "./components/FertilityTankLevel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<PlantListScreen />} />
        <Route path="/plant/:id" element={<PlantDetailScreen />} />
        <Route path="/water-tank" element={<WaterTankLevel />} />
        <Route path="/fertility-tank" element={<FertilityTankLevel />} />

      </Routes>
    </Router>
  );
}

export default App;
