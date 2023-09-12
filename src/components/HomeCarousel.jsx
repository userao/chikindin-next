"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function HomeCarousel({ images = null }) {
  const carouselSpeed = 20000;

  if (!images) return null;

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
        {images.map(({ img, base64}, i) => {
          return (
            <SwiperSlide
              key={img.src}
              className="overflow-hidden"
            >
              <Image
                src={`/${img.src}`}
                alt={`Project image #${i + 1}`}
                fill={true}
                placeholder='blur'
                blurDataURL={base64}
                className="object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
