import React, { useState } from 'react';
import Navbar from '../Home/NavBar'; // Ensure this path is correct
import '../../styles/Hero-sec.css'; // Ensure this file exists and the path is correct
import RewardsSection from './rewards';
import AllArticles from '../Home/AllArticles';
import PalaceSection from './palace';
import "../../styles/Home.css";
import ArticlesPage from './updates';
import StatSection from '../About/Stats';

function About() {
  const logos = [
    { id: 1, image: "/logo1.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 2, image: "/logo2.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 3, image: "/logo3.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 4, image: "/logo4.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 5, image: "/logo5.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  const styles = {
    heroSec: {
      width: '100%',
      padding: '20px',
      backgroundImage: "url('/about.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div style={styles.heroSec}>
        <div className="detail">
          Suhail Mohammed Al Zaroon first ever Emirati after the Royal family of United Arab Emirates (UAE) to be Awarded with a Guinness World Record Holder's Certificate Twice.
        </div>

        <div className="logo-section">
          <div className="logo-desc-sec">
            <div className="logo-detail">
              {logos[currentIndex].detail}
            </div>

            <div className="logos">
              <button className="nav-button" onClick={handlePrev}>
                &#8592;
              </button>
              <div className="logo-carousel">
                {logos
                  .slice(currentIndex, currentIndex + 3)
                  .concat(
                    currentIndex + 3 > logos.length
                      ? logos.slice(0, (currentIndex + 3) % logos.length)
                      : []
                  )
                  .map((logo) => (
                    <div key={logo.id} className="logo-item">
                      <img src={logo.image} alt={logo.detail} />
                    </div>
                  ))}
              </div>
              <button className="nav-button" onClick={handleNext}>
                &#8594;
              </button>
            </div>
          </div>

          <div className="Zarooni-img">
            <img src="/profile.png" alt="Suhail Mohammed Al Zarooni" />
          </div>
        </div>
      </div>
      <AllArticles></AllArticles>
      <RewardsSection></RewardsSection>
      <PalaceSection></PalaceSection>
      <StatSection></StatSection>
      <ArticlesPage></ArticlesPage>
      <div className="subscribe-section">
        <button className="subscribe-buttons">SUBSCRIBE</button>
        <p className="subscribe-text">Subscribe Newsletter to stay updated</p>
      </div>
      <footer className="footer-section">
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="fontSize">©2024 </p>
          <p className="fontSize"> Copy Right Reserved</p>
          <p className="fontSize">Leopard Leads IT Solutions</p>
        </div>
      </footer>
    </div>

  );
}


export default About;
