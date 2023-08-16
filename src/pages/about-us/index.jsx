import React from "react";

// todo
// - стрелочки на кнопочку
const AboutUs = () => {
  return (
    <section className="about-us m-900">
      <h1 className="about-us__header mb-300">О нас</h1>
      <p className="about-us__description fs-700 w-80 mb-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit error beatae, omnis aliquam
        et quisquam fugit tempora laudantium autem facilis, eligendi, quibusdam nobis sapiente
        maxime consequuntur esse consectetur necessitatibus. Error?
      </p>
      <div className="about-us__images even-columns g-400 mb-400">
        <div className="img-container">
          <img src="images/oleg.png" alt="Олег" />
        </div>
        <div className="img-container">
          <img src="images/regina.png" alt="Регина" />
        </div>
      </div>
      <p className="about-us__description fs-700 w-80 mb-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum commodi saepe, quia dolorum
        soluta explicabo? Rem molestias fuga vel, error ut suscipit minima unde molestiae aspernatur
        cupiditate fugiat, incidunt doloribus temporibus modi ex. Quisquam consequatur ad repellat
        fugit voluptas qui!
      </p>
      <div className="submit-application__container">
        <img className="arrow bottom-left" src="svg/arrow1.svg" alt="brand logo" />
        <img className="arrow top-left" src="svg/arrow2.svg" alt="brand logo" />
        <button className="submit-application-button p-200 fs-400">
          оставьте заявку на просчет стоймости проекта
        </button>
        <img className="arrow top-right" src="svg/arrow3.svg" alt="brand logo" />
        <img className="arrow bottom-right" src="svg/arrow4.svg" alt="brand logo" />
      </div>
    </section>
  );
};

export default AboutUs;
