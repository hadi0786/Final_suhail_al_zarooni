import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderImage.css"
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderImage = () => {
  const images = [
    "/album1.jpg", // Replace with actual image paths
    "/album2.jpg",
    "/album3.jpg",
    "/album2.jpg",
    "/album1.jpg", // Replace with actual image paths
  ];

  return (
    <div style={{ background: "white", padding: "20px" }}>
      <h2 className="text-center tc">Zarooni's Social Media</h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderImage;