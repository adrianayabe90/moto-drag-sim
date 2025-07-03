import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { EngineSetup } from "./pages/EngineSetup";
import { Tuning } from "./pages/Tuning";
import { Results } from "./pages/Results";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engine" element={<EngineSetup />} />
        <Route path="/tuning" element={<Tuning />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
