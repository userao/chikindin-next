import React from "react";
import { Link, useLocation } from "react-router-dom";

// todo
// реализовать переключение страниц
const Navbar = () => {
  const [activePage, setActivePage] = React.useState('/');
  const location = useLocation();

  React.useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  function handleClick() {

  }

  return (
    <nav className="nav bg-red">
      <div>
        <a href="/">
          <img className="nav__brand-logo" src="svg/brand_logo.svg" alt="brand logo" />
        </a>
      </div>
      <ul className="nav__links-list-container">
        <li className="nav__link-container">
          <Link className={`nav__link ${activePage === '/about-us' ? 'active' : null}`} to="/about-us" onClick={handleClick}>
            О нас
          </Link>
        </li>
        <li className="nav__link-container">
          <Link className={`nav__link ${activePage === '/our-work' ? 'active' : null}`} to="/our-work">
            Наши работы
          </Link>
        </li>
        <li className="nav__link-container">
          <Link className={`nav__link ${activePage === '/services' ? 'active' : null}`} to="/services">
            Услуги
          </Link>
        </li>
        <li className="nav__link-container">
          <Link className={`nav__link ${activePage === '/contacts' ? 'active' : null}`} to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
