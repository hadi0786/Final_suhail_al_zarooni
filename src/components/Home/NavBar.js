import React, { useState } from "react";
import '../../styles/NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <div className="navbar-title">Suhail Mohammad Al Zarooni</div>
        <div className={`navbar-links ${isMenuOpen ? "show" : "hide"}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#foundation" className="nav-link">Foundation</a>
          <a href="#museum" className="nav-link">Museum</a>
          <a href="#media" className="nav-link">Media</a>
          <a href="#collection" className="nav-link">Collection</a>
        </div>
      </div>
      <div className="navbar-right">
        <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
        <button className="subscribe-button">SUBSCRIBE</button>
        <span className="notification-icon">
          <img src="/notification-bell.png" alt="Notifications" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
