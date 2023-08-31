"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsCarousel({ cards }) {
  
  return (
    <>
      <Swiper className="h-full" slidesPerView={4} spaceBetween={5}>
        {cards.map((card) => {

          return (
            <SwiperSlide
              key={card.id}
              className="overflow-hidden relative"
            >
              <Link href={`our-work/${card.id}`}>
                <Image
                  src={`/${card.imagePath}`}
                  alt={card.name}
                  fill={true}
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 start-0 flex justify-center flex-col bg-card-hover opacity-0 hover:opacity-100 duration-500 cursor-pointer">
                  <div className="ml-4 text-white">
                    <h2 className="text-xl uppercase">{card.name}</h2>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
