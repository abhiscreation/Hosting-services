import React from "react";
import "./Home.css";
import { FaQrcode, FaFilePdf } from "react-icons/fa";

const services = [
  { name: "QR Code Generator", icon: <FaQrcode />, link: "/qr" },
  { name: "Word to PDF", icon: <FaFilePdf />, link: "/pdf" },
  // Future services can be added here
];

const Home = () => {
  return (
    <div className="home-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <a href={service.link} className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </a>
        ))}
        {/* Empty placeholders for future services */}
        <div className="service-card placeholder">Coming Soon</div>
        <div className="service-card placeholder">Coming Soon</div>
      </div>
    </div>
  );
};

export default Home;
