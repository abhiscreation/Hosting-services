import React from "react";
import "./Home.css";
import { FaQrcode, FaFilePdf } from "react-icons/fa";

const services = [
  { name: "QR Code Generator", icon: <FaQrcode />, type: "qr" },
  { name: "Word to PDF", icon: <FaFilePdf />, type: "wordtopdf" },
  { name: "PDF Editor", icon: <FaFilePdf />, type: "pdf" },
];

const Home = ({ onOpenModal }) => {
  return (
    <div className="framer-home-container">
      <div className="framer-home-content">
        <h2 className="framer-home-title">Welcome to iLoveQR</h2>
        <div className="framer-services-grid">
          {services.map((service, index) => (
            <button
              key={index}
              className="framer-service-card"
              onClick={() => onOpenModal(service.type)}
            >
              <div className="framer-service-icon">{service.icon}</div>
              <div className="framer-service-name">{service.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;