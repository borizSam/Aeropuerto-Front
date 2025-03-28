import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Airports from "./pages/Airports";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/airports" element={<Airports />} />
    </Routes>
  );
}
