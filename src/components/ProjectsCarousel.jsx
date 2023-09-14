"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "@/utils/imageLoader";

export default function ProjectsCarousel({ projects }) {

  return (
    <>
      <Swiper className="h-full" slidesPerView={4} spaceBetween={5}>
        {projects.map((project) => {

          return (
            <SwiperSlide
              key={project.id}
              className="overflow-hidden relative"
            >
              <Link href={`our-work/${project.id}`}>
                <Image
                  loader={imageLoader}
                  src={`/${project.img.src}`}
                  alt={project.name}
                  fill={true}
                  sizes="100%"
                  placeholder="blur"
                  blurDataURL={project.base64}
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 start-0 flex justify-center flex-col bg-card-hover opacity-0 hover:opacity-100 duration-500 cursor-pointer">
                  <div className="ml-4 text-white">
                    <h2 className="text-xl uppercase">{project.name}</h2>
                    <p className="text-sm">{project.description}</p>
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
