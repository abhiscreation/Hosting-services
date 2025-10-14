import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QRModal from "./components/QRModal";
import PDFModal from "./components/PDFModal";
import WordToPDFModal from "./components/WordToPDFModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (type) => {
    console.log("Opening modal:", type); // Debug log
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    console.log("Closing modal"); // Debug log
    setActiveModal(null);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
      </Routes>

      {/* Conditionally render modals */}
      {activeModal === "qr" && <QRModal onClose={handleCloseModal} />}
      {activeModal === "pdf" && <PDFModal onClose={handleCloseModal} />}
      {activeModal === "wordtopdf" && <WordToPDFModal onClose={handleCloseModal} />}
    </Router>
  );
}

export default App;