"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function HomeCarousel({ cards }) {
  const carouselSpeed = 20000;

  return (
    <>
      <Swiper
        className="h-full home-carousel"
        slidesPerView={'auto'}
        spaceBetween={5}
        noSwiping={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={carouselSpeed}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide
              key={card.projectName}
              className="overflow-hidden"
            >
              <Image
                src={`/${card.imagePath}`}
                alt={card.projectName}
                fill={true}
                className="object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
