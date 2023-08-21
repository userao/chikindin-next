"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// todo:
// -сделать не уебищно
const OurWork = () => {
  const projectCards = [
    {
      imagePath: "images/our-work/interior_1.png",
      projectName: "Спа на Кедровой",
      projectDescription: "проект спа-отелей в Новосибирске",
    },
    {
      imagePath: "images/our-work/interior_2.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "images/our-work/interior_3.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "images/our-work/interior_4.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "images/our-work/interior_5.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="h-screen-no-scroll">
      <Swiper className="h-full" slidesPerView={4} spaceBetween={5}>
        {projectCards.map((card) => {
          return (
            <SwiperSlide
              key={card.imagePath}
              className="overflow-hidden relative"
            >
              <img
                src={card.imagePath}
                alt={card.projectName}
                className="h-full object-cover w-full"
              />
              <div className="absolute w-full h-full top-0 start-0 flex justify-center flex-col bg-card-hover opacity-0 hover:opacity-100 duration-500 cursor-pointer">
                <div className="ml-4 text-white">
                  <h2 className="text-xl uppercase">{card.projectName}</h2>
                  <p className="text-sm">{card.projectDescription}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default OurWork;
