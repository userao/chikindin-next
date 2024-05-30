import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import tLogo from "public/svg/t_logo_gray.svg";
import waLogo from "public/svg/wa_logo.svg";
import atLogo from "public/svg/at_logo.svg";
import arrow from "public/svg/arrow.svg";

export const metadata = {
  title: "Chikindin-design: Наши контакты",
  description: "Способы, с помощью которых с нами можно связаться.",
};

const Contacts = () => {
  return (
    <section className="h-screen-no-scroll flex items-center justify-center">
      <TextSpinner text={"контакты"} radius={150} color={"brand-primary-400"} />
      <div className="mx-4">
        <h1 className="mb-10 text-3xl uppercase">Свяжитесь с нами!</h1>
        <div className="my-4 flex gap-4">
          <Image src={tLogo} />
          <Image src={waLogo} />
          <p className="text-2xl text-brand-primary-400">+7 (999) 178-86-55</p>
        </div>
        <div className="mt-4 mb-10 flex gap-4">
          <Image src={atLogo} />
          <p className="text-2xl text-brand-primary-400">chikindin@form.me</p>
        </div>
        <div className="group relative">
          <Image
            src={arrow}
            className="
              absolute scale-75 hidden md:block -z-10
              -top-[8rem] -right-[6rem] -rotate-45
              group-hover:-top-[7rem] group-hover:-right-[5rem]
              duration-500"
          />
          <Image
            src={arrow}
            className="
                absolute scale-75 hidden md:block -z-10
                -top-[8rem] -right-[2rem] -rotate-90
                group-hover:-top-[7rem] duration-500"
          />
          <Link href="/form">
            <button
              className="
                border-[4px] border-brand-primary-400
                p-4 text-[1rem]
                hover:bg-brand-primary-400 duration-500 hover:text-white">
              <p>или оставьте заявку на просчет стоимости проекта</p>
            </button>
          </Link>
        </div>
      </div>
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
};

export default Contacts;
