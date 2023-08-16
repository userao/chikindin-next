import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


// todo:
// -сделать не уебищно
const OurWork = () => {
  // const [images, setImages] = React.useState([]);

  const projectCards = [
    {
      imagePath: "images/our-work/Rectangle 5.png",
      projectName: "Спа на Кедровой",
      projectDescription: 'проект спа-отелей в Новосибирске',
    },
    {
      imagePath: "images/our-work/Rectangle 6.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "images/our-work/Rectangle 7.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "images/our-work/Rectangle 8.png",
      projectName: "Lorem, ipsum dolor.",
      projectDescription: "Lorem ipsum dolor sit amet.",
    }
  ]

  return (
    <div className="h-full">
      <Swiper
        // modules={}
        spaceBetween={5}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
          {projectCards.map((card) => {
            return (
            <SwiperSlide key={card.imagePath} className='h-full'>
              <img src={card.imagePath} alt={card.projectName} />
            </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  );
};

export default OurWork;
