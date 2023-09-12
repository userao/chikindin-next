import TextSpinner from "@/components/TextSpinner";
import React from "react";
import Image from "next/image";
import oleg from "public/images/Oleg.png";
import regina from "public/images/Regina.png";
import arrow1 from "public/svg/arrow1.svg";
import arrow2 from "public/svg/arrow2.svg";
import arrow3 from "public/svg/arrow3.svg";
import arrow4 from "public/svg/arrow4.svg";

export default async function AboutUs() {
  return (
    <section className="p-[8rem]">
      <TextSpinner
        text={"chikindin design"}
        radius={150}
        color={"brand-primary-400"}
      />
      <h1 className="uppercase text-2xl mb-8 font-bold">О нас</h1>
      <p className="mb-8 font-bold text-xl w-2/3">
        Мы - Регина и Олег Чикиндины, семейная дизайн-студия, где каждый проект
        — это проявление нашей любви к созданию интерьеров. За три года работы,
        мы реализовали множество вдохновляющих проектов для жилых и коммерческих
        пространств. Нам важны наши заказчики, и мы стремимся создавать
        интерьеры, которые соответствуют их потребностям и вдохновляют на новые
        высоты.
      </p>
      <div className="flex gap-4 mb-8">
        <div className="">
          <Image src={oleg} alt="Олег" placeholder='blur' width="auto" />
        </div>
        <div className="">
          <Image src={regina} alt="Регина" placeholder='blur' width="auto" />
        </div>
      </div>
      <p className="mb-[5.625rem] font-bold text-xl w-2/3">
        Работая с нами вы получите не только превосходный результат, но и
        приятный опыт общения и совместной работы над проектом. Каждая
        разработка интерьера начинается с понимания вашей уникальной истории и
        стиля. Наши заказчики получают профессиональный и эргономичный дизайн,
        благодаря богатому опыту студии в создании как жилых, так и коммерческих
        интерьеров. Мы остаемся с вами на каждом этапе проекта — от концепции до
        реализации. Наша цель — сделать процесс максимально комфортным и
        беззаботным для вас.
      </p>
      <div className="relative w-full md:w-3/4 lg:w-1/2 group">
        <Image
          className="absolute -start-[110px] -top-[70px]
            group-hover:-start-[90px]
            group-hover:-top-[60px]
            duration-500"
          src={arrow1}
          alt="arrow #1"
        />
        <Image
          className="absolute -start-[90px] -top-[120px]
            group-hover:-start-[80px]
            group-hover:-top-[95px]
            duration-500"
          src={arrow2}
          alt="arrow #2"
        />
        <button
          className="border-[3px] border-brand-primary-400
          rounded-xl p-4 text-neutral-400 w-full
          group-hover:bg-brand-primary-400 group-hover:text-white duration-500"
        >
          оставьте заявку на просчет стоймости проекта
        </button>
        <Image
          className="absolute -end-[130px] -top-[70px]
            group-hover:-end-[90px]
            group-hover:-top-[60px]
            duration-500"
          src={arrow3}
          alt="arrow #3"
        />
        <Image
          className="absolute -end-[130px] -top-[10px]
            group-hover:-end-[100px]
            group-hover:-top-[5px]
            duration-500"
          src={arrow4}
          alt="arrow #4"
        />
      </div>
    </section>
  );
}
