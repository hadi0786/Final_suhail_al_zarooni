import React, { useState } from "react";
import '../../styles/NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const currentLink=(val)=>{
setActive(val)
}
console.log(active,"active  ")
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <div className="navbar-title">Suhail Mohammad Al Zarooni</div>
        <div className={`navbar-links ${isMenuOpen ? "show" : "hide"}`}>
          <a href="#home" className={active==="home"?" navbar-links-active nav-link":"nav-link"} onClick={()=>currentLink("home")}>Home</a>
          <a href="#about" className="nav-link"onClick={()=>currentLink("about")}>About</a>
          <a href="#events" className="nav-link" onClick={()=>currentLink("events")}>Events</a>
          <a href="#foundation" className="nav-link" onClick={()=>currentLink("foundation")}>Foundation</a>
          <a href="#museum" className="nav-link" onClick={()=>currentLink("museum")}>Museum</a>
          <a href="#media" className="nav-link" onClick={()=>currentLink("media")}>Media</a>
          <a href="#collection" className="nav-link" onClick={()=>currentLink("collection")}>Collection</a>
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
