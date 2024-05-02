import Image from "next/image";
import Link from "next/link";
import founders from "public/images/founders.jpeg";
import arrow1 from "public/svg/arrow1.svg";
import arrow2 from "public/svg/arrow2.svg";
import arrow3 from "public/svg/arrow3.svg";
import arrow4 from "public/svg/arrow4.svg";

function AboutUs() {
  return (
    <section className="p-5 md:px-[2rem] xl:px-[8rem]">
      <h1 className="uppercase text-2xl mb-8 font-bold md:hidden text-md">О нас</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-5 md:mb-[7rem]">
        <div className="basis-1/2 self-center">
          <Image
            src={founders}
            alt="Олег"
            placeholder="blur"
            width="auto"
            className="rounded-xl max-h-min"
          />
        </div>
        <div className="basis-1/2">
          <h1 className="uppercase text-2xl mb-8 ms-8 font-bold hidden text-md md:block 2xl:text-[2.5rem]">О нас</h1>
          <p className="text-justify text-sm lg:text-xl xl:text-2xl">
            <span className="ms-8">Мы</span> - Регина и Олег Чикиндины, семейная
            дизайн-студия, где каждый проект — это проявление нашей любви к
            созданию интерьеров. За три года работы, мы реализовали множество
            вдохновляющих проектов для жилых и коммерческих пространств. Нам
            важны наши заказчики, и мы стремимся создавать интерьеры, которые
            соответствуют их потребностям и вдохновляют на новые высоты.
            <br />
            <br />
            <span className="ms-8">Работая</span> с нами вы получите не только
            превосходный результат, но и приятный опыт общения и совместной
            работы над проектом. Каждая разработка интерьера начинается с
            понимания вашей уникальной истории и стиля. Наши заказчики получают
            профессиональный и эргономичный дизайн, благодаря богатому опыту
            студии в создании как жилых, так и коммерческих интерьеров. Мы
            остаемся с вами на каждом этапе проекта — от концепции до
            реализации. Наша цель — сделать процесс максимально комфортным и
            беззаботным для вас.
          </p>
        </div>
      </div>
      <div className="relative w-full md:w-3/4 lg:w-3/7 group m-0 mx-auto md:mb-5">
        <Image
          className="hidden md:block
            absolute -start-[110px] -top-[70px]
            group-hover:-start-[90px]
            group-hover:-top-[60px]
            duration-500"
          src={arrow1}
          alt="arrow #1"
        />
        <Image
          className="hidden md:block
            absolute -start-[90px] -top-[120px]
            group-hover:-start-[80px]
            group-hover:-top-[95px]
            duration-500"
          src={arrow2}
          alt="arrow #2"
        />
        <Link href="/form">
          <button
            className="border-[3px] border-brand-primary-400
          rounded-xl p-4 text-neutral-400 w-full text-[1rem]
          group-hover:bg-brand-primary-400 group-hover:text-white duration-500"
          >
            оставьте заявку на просчет стоймости проекта
          </button>
        </Link>
        <Image
          className="hidden md:block 
            absolute -end-[130px] -top-[70px]
            group-hover:-end-[90px]
            group-hover:-top-[60px]
            duration-500"
          src={arrow3}
          alt="arrow #3"
        />
        <Image
          className="hidden md:block
            absolute -end-[130px] -top-[10px]
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

export default AboutUs;
