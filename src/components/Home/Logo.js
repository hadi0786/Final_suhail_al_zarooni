import React from "react";
import Slider from "react-slick";
import "./Logo.css"; // Add your custom styles here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "8.png", alt: "Logo 1" }, // Replace with actual image URLs
  { src: "9.png", alt: "Logo 2" },
  { src: "10.png", alt: "Logo 3" },
  { src: "11.png", alt: "Logo 4" },
  { src: "12.png", alt: "Logo 5" },
];

const AlZaroonisWorld = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, // Enables auto-sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Ahsing",
        overflow: "hidden", // Hide overflow
        padding:"40px",
      }}
    >
      <h2 class="text-world">Explore Al Zarooni's World</h2>
      <div className="slider-wrapper" style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-container">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: "80%", margin: "0 auto", borderRadius: "8px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AlZaroonisWorld;
