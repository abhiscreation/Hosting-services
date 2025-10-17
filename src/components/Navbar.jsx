import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out! (Simulated)");
    navigate("/");
  };

  return (
    <div className="framer-nav-wrap">
      <div className="framer-nav" data-framer-name="nav-wrap" data-border="true">
        <div className="framer-logo-wrap">
          <div className="framer-logo">
            <span>iLove</span>QR
          </div>
        </div>
        <ul className="framer-nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `framer-nav-link ${isActive ? "framer-nav-link-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/qr"
              className={({ isActive }) =>
                `framer-nav-link ${isActive ? "framer-nav-link-active" : ""}`
              }
            >
              QR Code
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pdf"
              className={({ isActive }) =>
                `framer-nav-link ${isActive ? "framer-nav-link-active" : ""}`
              }
            >
              PDF Tools
            </NavLink>
          </li>
        </ul>
        <div className="framer-auth-buttons">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="framer-nav-link framer-auth-link"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="framer-nav-link framer-auth-link"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button className="framer-logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;