import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./slider.css"

const Slider = () => {
  return (
    <div className="section-container">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1} // Shows one slide at a time
        breakpoints={{
          768: {
            slidesPerView: 3, // Switch to 3 cards side-by-side on wider screens
          },
        }}
      >
        <SwiperSlide>
          <div className="cardr">
          <p className="card-text cardr-text">
              Actor, director, producer, and screenwriter Usman Peerzada of
              Pakistan was summoned by His Excellency Suhail Mohammed Al
              Zarooni!
            </p>
          </div>
          <div>
          <img src="/album3.jpg" alt="Person 1" className="card-image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/album4.png" alt="Person 2" className="middle" />
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="/album2.jpg" alt="Person 3" className="card-image" />
          </div>
          <div className="cardr cardright">
            <p className="card-text cardr-text">
              It appears that Mr. Kashif Anwar, the President of the Lahore
              Chamber of Commerce & Industry...
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
