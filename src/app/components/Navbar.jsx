import React from "react";

const Navbar = () => {

  return (
    <nav className="bg-neutral-100">
      <div>
        <a href="/">
          <img className="nav__brand-logo" src="svg/brand_logo.svg" alt="brand logo" />
        </a>
      </div>
      <ul className="nav__as-list-container">
        <li className="nav__a-container">
          <a>
            О нас
          </a>
        </li>
        <li className="nav__a-container">
          <a>
            Наши работы
          </a>
        </li>
        <li className="nav__a-container">
          <a>
            Услуги
          </a>
        </li>
        <li className="nav__a-container">
          <a>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
