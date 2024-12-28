import { RightCircleOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const StatSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    {
      img: "/album1.jpg",
      title: "Album of Excellency Visit in Pakistan",
      description:
        "Actor, director, producer, and screenwriter Usman Peerzada was joined ",
    },
    {
      img: "/album2.jpg",
      title: "Guinness World Record Event",
      description:
        "Celebrating the incredible journey and achievements of Suhail Mohammed Al Zarooni!",
    },
    {
      img: "/album3.jpg",
      title: "Cultural Exchange Program",
      description:
        "Highlighting the strong bonds of friendship and collaboration during ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, [cardData.length]);
console.log(currentIndex)
  const currentCard = cardData[currentIndex];

  return (
    <div className="stat-section">
      <div className="left-section">
        <div className="stat-title">
          <h2 className="stat-title">Suhail Mohammed Al Zarooni</h2>
          <h2 className="stat-title">
            <span className="golden">Guinness</span> World{" "}
            <span className="golden">Record Holder</span>
          </h2>
        </div>
        <div className="stat-card">
          <div className="card-img">
            <img
              src={currentCard.img}
              alt={currentCard.title}
              className="card-img"
            />
          </div>
          <div className="card-content">
            <h4>{currentCard.title}</h4>
            <p>{currentCard.description}</p>
          </div>
          <RightCircleOutlined className="icon"   twoToneColor="#000" />
        </div>
        <div class="dot-container">
    <div class={currentIndex===1?"dot-active dot":"dot"}></div>
    <div class={currentIndex===2?"dot-active dot":"dot"}></div>
    <div class={currentIndex===3?"dot-active dot":"dot"}></div>
    <div class={currentIndex===4?"dot-active dot":"dot"}></div>
 
  </div>
        <div className="stats-row">
  <div className="statcol">
    <div className="stat-number">1</div>
    <div className="stat-label">World Record Holder</div>
    <div class="vertical-line"></div>

  </div>
  <div className="statcol">
    <div className="stat-number">45</div>
    <div className="stat-label">National Award Holder</div>
    <div className="vertical-line"></div>
  </div>
  <div className="statcol">
    <div className="stat-number">10k+</div>
    <div className="stat-label">Followers On Social Media</div>
  </div>
</div>
      </div>
      <div className="right-section">
        <img
          src="/zarooni.png"
          alt="Suhail Mohammed Al Zarooni"
          className="right-img"
        />
      </div>
    </div>
  );
};

export default StatSection;
