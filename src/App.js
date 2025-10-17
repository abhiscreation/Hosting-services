import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QRModal from "./components/QRModal";
import PDFModal from "./components/PDFModal";
import WordToPDFModal from "./components/WordToPDFModal";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (type) => {
    console.log("Opening modal:", type);
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setActiveModal(null);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      {activeModal === "qr" && <QRModal onClose={handleCloseModal} />}
      {activeModal === "pdf" && <PDFModal onClose={handleCloseModal} />}
      {activeModal === "wordtopdf" && <WordToPDFModal onClose={handleCloseModal} />}
    </Router>
  );
}

export default App;
