"use client";

import React, {useEffect, useState} from 'react';

import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCoverflow} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlide() {
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="banner">
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,                      // Rotate of the prev and next slides
          depth: 200,                     // Depth of the prev and next slides
          stretch: 30,                    // Space between the slides
          modifier: 1,                    // Multiply the values of rotate, depth, and stretc
          scale: 1,                       // Size ratio of the prev and next slides
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="slider"
      >
        {
          Array.from({ length: 7 }).map((item, index) =>
            <SwiperSlide key={index + 1}>
              <img src={`/slide${index + 1}.jpg`} alt="Serviço realizado" />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
}
