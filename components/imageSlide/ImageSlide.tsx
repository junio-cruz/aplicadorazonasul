"use client";

import React from 'react';

import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default async function ImageSlide() {

  return (
    <div className="banner">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider"
      >
        {
          Array.from({ length: 10 }).map((item, index) =>
            <SwiperSlide key={index + 1}>
              <img src={`/slide${index + 1}.jpg`} alt="Serviço realizado" />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
}
