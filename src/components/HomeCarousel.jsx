"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import imageLoader from "@/utils/imageLoader";

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
        {images.map(({ img, base64 }, i) => {
          const imagePath = "/" + img.src.split("\\").join("/");

          return (
            <SwiperSlide key={img.src} className="overflow-hidden">
              <Image
                loader={imageLoader}
                src={imagePath}
                alt={`Project image #${i + 1}`}
                fill={true}
                placeholder="blur"
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
