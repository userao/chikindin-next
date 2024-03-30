"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
``;
export default function HomeCarousel({ images = null }) {
  const carouselSpeed = 10000;

  if (!images) return null;

  return (
    <>
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        spaceBetween={5}
        grabCursor={true}
        breakpoints={{
          1000: {
            slidesPerView: 1.5,
          },
          1500: {
            slidesPerView: 2,
          }
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={carouselSpeed}
        modules={[Autoplay]}
      >
        {images.map(({ src, base64 }, i) => {
          const filepath = src.replace("public", "").replaceAll("\\", "/");
          return (
            <SwiperSlide key={src} className="flex content-center items-center">
              <Image
                src={filepath}
                alt={`Project image #${i + 1}`}
                fill={true}
                sizes="100%"
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
