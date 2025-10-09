 // src/components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">i Love<span>QR</span></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/qr">QR Code</a></li>
        <li><a href="/pdf">PDF Tools</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
