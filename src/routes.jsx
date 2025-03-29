import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Airports from "./pages/Airports";
import Planes from "./pages/Planes";
import Flights from "./pages/Flights";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/airports" element={<Airports />} />
      <Route path="/planes" element={<Planes />} />
      <Route path="/flights" element={<Flights />} />

    </Routes>
  );
}
