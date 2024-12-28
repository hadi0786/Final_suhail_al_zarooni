import React, { useState, useEffect } from "react";
import { spring, Motion } from "react-motion";
import axios from "axios";
import "./Herosec.css";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch slides from the Article API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/slides"); // Fetch slides from backend
        setSlides(data.data);
      } catch (err) {
        console.error("Error fetching slides:", err);
      }
    };

    fetchSlides();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <Motion
          key={index}
          style={{
            left: spring(index === currentSlide ? 0 : 100, {
              stiffness: 120,
              damping: 20,
            }),
          }}
        >
          {({ left }) => (
            <div
              className="hero-slide"
              style={{
                left: `${left - 100}%`,
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              <div className="hero-text">
                <h2>{slide.title}</h2>
                <p>{slide.content.substring(0, 100)}...</p>
              </div>
            </div>
          )}
        </Motion>
      ))}
    </div>
  );
};

export default Hero;
