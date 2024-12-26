import React, {useState} from "react";
import "../../styles/Home.css";
import "../../styles/NavBar.css";
import Navbar from "./NavBar";
import AllArticles from "./AllArticles";
import StatSection from "./stats";
import Footer from "./Footer";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [
    "Bollywood Guests",
    "Bollywood Guests",
    "Bollywood Guests",
    "Bollywood Guests",
    "Pakistani Guests",
  ];
  const images = [
    "/album1.jpg", // Replace with actual image paths
    "/album2.jpg",
    "/album3.jpg",
    "/album2.jpg",
    "/album1.jpg", // Replace with actual image paths
    "/album2.jpg",
    "/album3.jpg",
    "/album2.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Navbar */}

      <Navbar></Navbar>

      {/* Video Section */}
      <div className="video-container">
        <video className="intro-video" autoPlay muted loop>
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      </div>

      {/* Logo Section */}
      <div className="logo-section">
        <h2 className="logo-section-title">Explore Al Zarooni's World</h2>
        <div className="logo-slider">
          <div className="logo-container">
            <img
              src="/Al zaroni events.png"
              alt="Logo 1"
              className="logo-item"
            />
            <img
              src="/Al zarooi Foundationn.png"
              alt="Logo 2"
              className="logo-item"
            />
            <img
              src="/Al Zarooni Museum small.png"
              alt="Logo 4"
              className="logo-item"
            />
            <img
              src="/Suhail AL Zarooni Collection.png"
              alt="Logo 5"
              className="logo-item"
            />
            <img
              src="/Suhail AL Zarooni Media.png"
              alt="Logo 6"
              className="logo-item"
            />
          </div>
        </div>
      </div>

      <AllArticles></AllArticles>
      {/* Description Section */}
      <div className="description-section">
        <p className="description-text">
          Suhail Mohammed Al Zarooni, first ever Emirati after the Royal family
          of United Arab Emirates (UAE) to be Awarded with a Guinness World
          Record Holder's Certificate Twice.
        </p>
      </div>
      <StatSection></StatSection>
      <div className="section-container">
        <div class="Left-card">
          <div className="card">
            <p className="card-text">
              Actor, director, producer, and screenwriter Usman Peerzada of
              Pakistan was summoned by His Excellency Suhail Mohammed Al
              Zarooni!
            </p>
          </div>
          <div>
            <img src="/album3.jpg" alt="Person 1" className="card-image" />
          </div>
        </div>

        <div className="Middle-card">
          <img src="/album4.png" alt="Person 2" className="middle" />
        </div>
        <div className="right-card">
          <div>
            <img src="/album2.jpg" alt="Person 3" className="card-image" />
          </div>
          <div className="cardr">
            <p className="card-text">
              It appears that Mr. Kashif Anwar, the President of the Lahore
              Chamber of Commerce & Industry...
            </p>
          </div>
        </div>
      </div>
      <div className="category-buttons text-center">
        {categories.map((category) => (
          <button
            key={category}
            className="btn btn-primary"
            // onClick={() => filterByCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div class="Card-Section">
      <div class="serv ">
  <ul>
  
          <li>
            <img src="/1.png" alt="Person 3" />
          </li>
          <li>
            <img src="/2.png" alt="Person 3" />
            <div class="card-title">His Excellency in Pakistan</div>
          </li>
          <li>
            <img src="/1.png" alt="Person 3" />
          </li>
          <li>
            <img src="/2.png" alt="Person 3" />
            <div class="card-title">His Excellency in Pakistan</div>
          </li>
          <li>
            <img src="/1.png" alt="Person 3" />
          </li>
          
          </ul>
        </div>
        <div class="serv">
  <ul>
  
          <li>
            <img src="/1.png" alt="Person 3" />
          </li>
          <li>
            <img src="/2.png" alt="Person 3" />
            <div class="card-title">His Excellency in Pakistan</div>
          </li>
          <li>
            <img src="/1.png" alt="Person 3" />
          </li>
          <li>
            <img src="/2.png" alt="Person 3" />
            <div class="card-title">His Excellency in Pakistan</div>
          </li>
          <li>
            <img src="/1.png" alt="Person 3" />
          </li>
        
          </ul>
        </div>
      </div>
      <div className="carousel-img-section">
        <h2 class="media-title">Zarooni's Social Media</h2>
        <div className="carousel">
          <button className="carousel-button prev" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="carousel-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`carousel-image ${
                  index === currentIndex
                    ? "active"
                    : index === (currentIndex + 1) % images.length
                    ? "next"
                    : index ===
                      (currentIndex - 1 + images.length) % images.length
                    ? "prev"
                    : ""
                }`}
              />
            ))}
          </div>
          <button className="carousel-button next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="subscribe-section">
        <button className="subscribe-buttons">SUBSCRIBE</button>
        <p className="subscribe-text">Subscribe Newsletter to stay updated</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
