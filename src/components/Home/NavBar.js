import React, { useState } from "react";
import axios from "axios";
import '../../styles/NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentLink = (val) => {
    setActive(val);
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
        <div className="navbar-links">
          <a
            href="#home"
            className={active === "home" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={active === "about" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("about")}
          >
            About
          </a>
          <a
            href="#events"
            className={active === "events" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("events")}
          >
            Events
          </a>
          <a
            href="#foundation"
            className={active === "foundation" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("foundation")}
          >
            Foundation
          </a>
          <a
            href="#museum"
            className={active === "museum" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("museum")}
          >
            Museum
          </a>
          <a
            href="#media"
            className={active === "media" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("media")}
          >
            Media
          </a>
          <a
            href="#collection"
            className={active === "collection" ? "navbar-links-active nav-link" : "nav-link"}
            onClick={() => currentLink("collection")}
          >
            Collection
          </a>
        </div>
      </div>
      <div className="navbar-right">
        <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
        <button className="subscribe-button" onClick={() => setShowModal(true)}>SUBSCRIBE</button>
        <span className="notification-icon">
        <img src="/notification-bell.png" alt="Notifications" />
        </span>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Subscribe</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={handleSubscribe}>Subscribe</button>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
