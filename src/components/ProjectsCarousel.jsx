"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import { setLoadingState } from "@/store/loadingStateSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function ProjectsCarousel({ carouselData }) {
  const dispatch = useDispatch();
  const [slidesPerView, setSlidesPerView] = useState(null);

  useEffect(() => {
    setSlidesPerView(window.innerWidth / 400);
  }, [])

  function handleClick() {
    dispatch(setLoadingState('loading'));
  }

  return (
    <>
      <Swiper className="h-full" slidesPerView={slidesPerView} spaceBetween={5} mousewheel={true} modules={[Mousewheel]}>
        {carouselData.map((project) => {

          return (
            <SwiperSlide
              key={project.id}
              className="overflow-hidden relative flex-none"
            >
              <Link href={`our-work/${project.id}`} className="block w-full h-full relative" onClick={handleClick}>
                <Image
                  src={project.src}
                  alt={project.name}
                  fill={true}
                  sizes="100%"
                  placeholder={project.base64}
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
