"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";

export default function ProjectsCarousel({ projects }) {

  return (
    <>
      <Swiper className="h-full" slidesPerView={4} spaceBetween={5}>
        {projects.map((project) => {
          return (
            <SwiperSlide
              key={project.imagePath}
              className="overflow-hidden relative"
            >
              <Link href={`our-work/${project.id}`}>
                <img
                  src={project.imagePath}
                  alt={project.projectName}
                  className="h-full object-cover w-full"
                />
                <div className="absolute w-full h-full top-0 start-0 flex justify-center flex-col bg-card-hover opacity-0 hover:opacity-100 duration-500 cursor-pointer">
                  <div className="ml-4 text-white">
                    <h2 className="text-xl uppercase">{project.projectName}</h2>
                    <p className="text-sm">{project.projectDescription}</p>
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
