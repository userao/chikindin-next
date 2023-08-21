import React from "react";

// todo
// - стрелочки на кнопочку
const AboutUs = () => {
  return (
    <section className="p-[8rem]">
      <h1 className="uppercase text-2xl mb-8 font-bold">О нас</h1>
      <p className="mb-8 font-bold text-xl w-2/3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit error beatae, omnis aliquam
        et quisquam fugit tempora laudantium autem facilis, eligendi, quibusdam nobis sapiente
        maxime consequuntur esse consectetur necessitatibus. Error?
      </p>
      <div className="flex gap-4 mb-8">
        <div className="">
          <img src="images/oleg.png" alt="Олег" />
        </div>
        <div className="">
          <img src="images/regina.png" alt="Регина" />
        </div>
      </div>
      <p className="font-bold text-xl mb-[5.625rem]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum commodi saepe, quia dolorum
        soluta explicabo? Rem molestias fuga vel, error ut suscipit minima unde molestiae aspernatur
        cupiditate fugiat, incidunt doloribus temporibus modi ex. Quisquam consequatur ad repellat
        fugit voluptas qui!
      </p>
      <div className="relative w-1/2">
        <img className="absolute -start-[90px] -top-[70px]" src="svg/arrow1.svg" alt="brand logo" />
        <img className="absolute -start-[60px] -top-[100px]" src="svg/arrow2.svg" alt="brand logo" />
        <button className="border-[3px] border-brand-primary-400 rounded-xl p-4 text-neutral-400 w-full">
          оставьте заявку на просчет стоймости проекта
        </button>
        <img className="absolute -end-[110px] -top-[70px]" src="svg/arrow3.svg" alt="brand logo" />
        <img className="absolute -end-[110px] -top-[10px]" src="svg/arrow4.svg" alt="brand logo" />
      </div>
    </section>
  );
};

export default AboutUs;
