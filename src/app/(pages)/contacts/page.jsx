import TextSpinner from "@/components/TextSpinner";
import React from "react";

const Contacts = () => {
  return (
    <section className="h-screen-no-scroll flex items-center justify-center">
      <TextSpinner text={"контакты"} radius={150} color={"brand-primary-400"} />
      <div className="mx-4">
        <div className="my-4">
          <p className="my-2">Telegram/WhatsApp</p>
          <p className="text-3xl text-brand-primary-400">+7 (999) 178-86-55</p>
        </div>
        <div className="my-4">
          <p className="my-2">Почта</p>
          <p className="text-3xl text-brand-primary-400">chikindin@form.me</p>
        </div>
        <button className="px-3 py-2 lowercase rounded-lg mt-8 text-neutral-400 border-4 border-brand-primary-400 hover:bg-brand-primary-400 hover:text-white duration-500">
          Оставьте заявку на просчет стоимости проекта
        </button>
      </div>
    </section>
  );
};

export default Contacts;
