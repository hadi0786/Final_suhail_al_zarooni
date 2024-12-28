import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import '../../styles/NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowModal(!showModal); // Show the navigation modal
  };

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:5000/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (err) {
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <div className="navbar-title">Suhail Mohammad Al Zarooni</div>
        {/* Hide links on smaller screens */}
        <div className="navbar-links desktop-only">
          <Link
            to="/home"
            className={location.pathname === "/home" ? "navbar-links-active nav-link" : "nav-link"}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "navbar-links-active nav-link" : "nav-link"}
          >
            About
          </Link>
          <Link
            to="/event"
            className={location.pathname === "/event" ? "navbar-links-active nav-link" : "nav-link"}
          >
            Events
          </Link>
          <Link
            to="/foundation"
            className={location.pathname === "/foundation" ? "navbar-links-active nav-link" : "nav-link"}
          >
            Foundation
          </Link>
          <Link
            to="/museum"
            className={location.pathname === "/museum" ? "navbar-links-active nav-link" : "nav-link"}
          >
            Museum
          </Link>
          <Link
            to="/media"
            className={location.pathname === "/media" ? "navbar-links-active nav-link" : "nav-link"}
          >
            Media
          </Link>
          <Link
            to="/collection"
            className={location.pathname === "/collection" ? "navbar-links-active nav-link" : "nav-link"}
          >
            Collection
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
        <button className="subscribe-button" onClick={() => setShowModal(true)}>SUBSCRIBE</button>
        <span className="notification-icon">
          <img src="/notification-bell.png" alt="Notifications" />
        </span>
      </div>

      {/* Modal for Navigation Links */}
      {showModal && isMenuOpen && (
        <div className="modal full-screen-modal">
          <div className="modal-content">
            <span className="close" onClick={toggleMenu}>&times;</span>
            <div className="modal-links">
              <Link to="/home" onClick={toggleMenu}>Home</Link>
              <Link to="/about" onClick={toggleMenu}>About</Link>
              <Link to="/event" onClick={toggleMenu}>Events</Link>
              <Link to="/foundation" onClick={toggleMenu}>Foundation</Link>
              <Link to="/museum" onClick={toggleMenu}>Museum</Link>
              <Link to="/media" onClick={toggleMenu}>Media</Link>
              <Link to="/collection" onClick={toggleMenu}>Collection</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
