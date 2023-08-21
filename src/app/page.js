"use client";
import { useEffect } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  const imagesPaths = [
    "images/home/carousel_image_1.png",
    "images/home/carousel_image_2.png",
    "images/home/carousel_image_3.png",
    "images/home/carousel_image_4.png",
  ];

  return (
    <section className="h-screen-no-scroll">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        slidesPerView={1.5}
        autoplay={true}
        className="h-full"
      >
        {imagesPaths.map((path, i) => {
          return (
            <SwiperSlide key={i} className="overflow-hidden">
              <img
                src={path}
                alt={`Interior number ${i}`}
                className="h-full object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
