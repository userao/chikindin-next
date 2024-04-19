"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { setLoadingState } from "@/store/loadingStateSlice";
import { useDispatch } from "react-redux";

export default function ProjectsCarousel({ carouselData }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setLoadingState("loading"));
  }

  return (
    <>
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        spaceBetween={5}
        mousewheel={true}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination]}>
        {carouselData.map((project) => {
          const filepath = project.src.replace("public", "").replaceAll("\\", "/");
          return (
            <SwiperSlide key={project.id} className="flex content-center items-center">
              <Link
                href={`our-work/${project.id}`}
                className="block w-full h-full relative"
                onClick={handleClick}>
                <Image
                  src={filepath}
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
