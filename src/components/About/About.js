import React, { useState } from 'react';
import Navbar from '../Home/NavBar'; // Ensure this path is correct
import '../../styles/Hero-sec.css'; // Ensure this file exists and the path is correct
import RewardsSection from './rewards';
import AllArticles from '../Home/AllArticles';
import PalaceSection from './palace';
import "../../styles/Home.css";
import ArticlesPage from './updates';
import StatSection from '../About/Stats';
import Footer from '../Home/Footer';

function About() {
  const logos = [
    { id: 1, image: "/8.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 2, image: "/9.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 3, image: "/10.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 4, image: "/11.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
    { id: 5, image: "/12.png", detail: "Suhail Mohd Al Zarooni is a Guinness World Record holder, An Emirati Collector, An Author & Businessman from Dubai, United Arab Emirates. He had born November 16, 1968. He is the son of Mohammad Abdul Karim Al Zarooni." },
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
      padding: '30px',
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
        <div className="Zarooni-mobile-img">
            <img src="/profile.png" alt="Suhail Mohammed Al Zarooni" />
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
      <StatSection></StatSection>
      <ArticlesPage></ArticlesPage>
      <RewardsSection></RewardsSection>
      <PalaceSection></PalaceSection>
      <AllArticles></AllArticles>
      <div className="subscribe-section">
        <button className="subscribe-buttons">SUBSCRIBE</button>
        <p className="subscribe-text">Subscribe Newsletter to stay updated</p>
      </div>
      <Footer></Footer>
    </div>

  );
}


export default About;
