import Image from "next/image";
import Link from "next/link";
import founders from "public/images/founders.png";
import arrow from "public/svg/arrow.svg";

function AboutUs() {
  return (
    <section className="p-5 md:px-10 2xl:px-[16rem]">
      <h1 className="uppercase text-2xl text-brand-primary-400 mb-8 font-bold md:hidden text-md">
        О нас
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-5 lg:mb-[5rem]">
        <div className="self-center md:w-[40%] shrink-0">
          <Image src={founders} alt="ceo" placeholder="blur" width="auto" className="w-full" />
        </div>
        <div className="">
          <h1 className="uppercase text-2xl mb-8 font-bold hidden text-brand-primary-400 lg:mb-[4rem] md:block 2xl:text-[2.5rem]">
            О нас
          </h1>
          <p className="text-justify text-sm lg:text-xl xl:text-2xl 2xl:text-[2rem]">
            Мы - Регина и Олег Чикиндины, семейная дизайн-студия, где каждый проект — это проявление
            нашей любви к созданию интерьеров. За три года работы, мы реализовали множество
            вдохновляющих проектов для жилых и коммерческих пространств. Нам важны наши заказчики, и
            мы стремимся создавать интерьеры, которые соответствуют их потребностям и вдохновляют на
            новые высоты.
            <br />
            <br />
            Работая с нами вы получите не только превосходный результат, но и приятный опыт общения
            и совместной работы над проектом. Каждая разработка интерьера начинается с понимания
            вашей уникальной истории и стиля. Наши заказчики получают профессиональный и
            эргономичный дизайн, благодаря богатому опыту студии в создании как жилых, так и
            коммерческих интерьеров. Мы остаемся с вами на каждом этапе проекта — от концепции до
            реализации. Наша цель — сделать процесс максимально комфортным и беззаботным для вас.
          </p>
        </div>
      </div>
      <div className="relative lg:w-[40%] group m-0 md:mb-5">
        <Image
          src={arrow}
          alt="button arrow"
          className="
            absolute hidden -z-10
            -right-[10rem] -bottom-[3rem]
            rotate-[35deg] scale-75 lg:block
            group-hover:-translate-x-8
            group-hover:-translate-y-3 duration-300"
        />
        <Image
          src={arrow}
          alt="button arrow"
          className="
            absolute hidden -z-10
            -right-[8.5rem] bottom-[1rem]
            scale-75 lg:block
            group-hover:-translate-x-8
            group-hover:translate-y-3 duration-300"
        />
        <Link href="/form">
          <button
            className="border-[4px] border-brand-primary-400
           p-4 w-full text-[1rem]
          group-hover:bg-brand-primary-400 duration-500">
            <p className="text-neutral-400 group-hover:text-white group-hover:scale-110 duration-300 2xl:text-xl">
              оставьте заявку на просчет стоймости проекта
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AboutUs;
