import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QR from "./components/QR";
import PDF from "./components/PDF";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<QR />} />
        <Route path="/pdf" element={<PDF />} />
      </Routes>
    </Router>
  );
}

export default App;
