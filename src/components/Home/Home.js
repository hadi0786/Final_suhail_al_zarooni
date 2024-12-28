import React, {useState} from "react";
import "../../styles/Home.css";
import "../../styles/NavBar.css";
import Navbar from "./NavBar";
import AllArticles from "./AllArticles";
import StatSection from "./stats";
import Footer from "./Footer";
import AlZaroonisWorld from "./Logo";
import ArticleCard from "./article card";
import Slider from "./slider";
import SliderImage from "./SliderImage";
import Card from "./card";

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
      {/* Navbar */}<Navbar></Navbar>

      {/* Video Section */}
      <div className="video-container">
          <video className="intro-video" autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>

      {/* Logo Section */}<AlZaroonisWorld></AlZaroonisWorld>


      {/* Articles */}<AllArticles></AllArticles>


      <div className="description-section">
        <p className="description-text">
          Suhail Mohammed Al Zarooni, first ever Emirati after the Royal family
          of United Arab Emirates (UAE) to be Awarded with a Guinness World
          Record Holder's Certificate Twice.
        </p>
      </div>


      {/* stats */}<StatSection></StatSection>



      {/* Cards */}<Slider></Slider>
      

      <ArticleCard></ArticleCard>
      {/* <SliderImage></SliderImage> */}
      <Card></Card>

      <div className="subscribe-section">
        <button className="subscribe-buttons">SUBSCRIBE</button>
        <p className="subscribe-text">Subscribe Newsletter to stay updated</p>
      </div>
      <Footer></Footer>
      

    </div>
  );
}

export default Home;
