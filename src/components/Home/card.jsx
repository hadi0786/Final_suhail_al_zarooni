import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./card.css";

function Card() {
  const cardSectionStyle = {
    backgroundImage: 'url(/about.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="card-section" style={cardSectionStyle}>
      <div className="container">
        <h1 className="heading">Zarooni's Social Media</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/album1.jpg" alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Card;
