import React from "react";
import "./Home.css";
import { FaQrcode, FaFilePdf } from "react-icons/fa";

const services = [
  { name: "QR Code Generator", icon: <FaQrcode />, link: "/qr" },
  { name: "Word to PDF", icon: <FaFilePdf />, link: "/pdf" },
  // Future services can be added here
];

const Home = ({ onOpenModal }) => {
  return (
    <div className="home-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <button
            key={index}
            className="service-card"
            onClick={() => onOpenModal(service.type)}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
