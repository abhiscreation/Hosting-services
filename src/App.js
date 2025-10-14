import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QRModal from "./components/QRModal";
import PDFModal from "./components/PDFModal";
import WordToPDFModal from "./components/WordToPDFModal";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (type) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
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
