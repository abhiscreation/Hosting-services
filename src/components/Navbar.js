<<<<<<< HEAD
function Navbar() {
  return (
    <nav style={{
      padding: "1.5rem",
      background: "linear-gradient(90deg, #2a5be253 40%, #3affff77 100%)",
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "bold",
      letterSpacing: "2px",
      boxShadow: "0 3px 16px #2a5be2aa",
      borderBottom: "2px solid #3affff66"
    }}>
      FUTURE SERVICES
=======
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
>>>>>>> dc9c2f543130a780a5dceca16c214affeaff0a8a
    </nav>
  );
}
export default Navbar;
