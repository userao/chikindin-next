"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
``
export default function HomeCarousel({ images = null }) {
  const carouselSpeed = 20000;

  if (!images) return null;

  return (
    <>
      <Swiper
        className="h-full home-carousel"
        slidesPerView={"auto"}
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
        {images.map(({ src, base64 }, i) => {
          const filepath = src.replace('public', '').replaceAll('\\', '/');
          return (
            <SwiperSlide key={src} className="overflow-hidden">
              <Image
                src={filepath}
                alt={`Project image #${i + 1}`}
                fill={true}
                placeholder={base64}
                className="object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
