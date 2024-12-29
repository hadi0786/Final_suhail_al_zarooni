import React from "react";
import "../../styles/Home.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div class="space"></div>
      <div className="footer-content">
        {/* Left Column */}
        <div className="footer-column">
          <h3 className="footer-title">Suhail Al Zarooni</h3>
          <p className="footer-description">
            A brief description about the celebrity goes here. It can include
            their achievements, career highlights, or other interesting facts.
          </p>
        </div>

        {/* Middle Column */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#foundation">Foundation</a>
            </li>
            <li>
              <a href="#museum">Museum</a>
            </li>
            <li>
              <a href="#collection">Collection</a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-socials">
            <a href="#twitter" className="social-icon">
              <img src="/3.png" alt="Twitter" height="40px" width="40px" />
            </a>
            <a href="#facebook" className="social-icon">
              <img src="/4.png" alt="Facebook" height="40px" width="40px" />
            </a>
            <a href="#youtube" className="social-icon">
              <img src="/5.png" alt="YouTube" height="40px" width="40px" />
            </a>
            <a href="#whatsapp" className="social-icon">
              <img src="/6.png" alt="WhatsApp" height="40px" width="40px" />
            </a>
          </div>
          <img src="/name.png" class="name"/>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="fontSize">©2024 </p>
        <p className="fontSize">Copy Right Reserved</p>
        <p className="fontSize">Leopard Leads IT Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
