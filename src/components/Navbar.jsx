import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-neutral-100">
      <div className="relative flex items-center justify-center h-header">
        <div className="absolute start-8">
          <Link href="/">
            <img className="" src="svg/brand_logo.svg" alt="brand logo" />
          </Link>
        </div>
        <ul className="flex items-center gap-navbar-links uppercase">
          <li className="">
            <Link href="/about-us">О нас</Link>
          </li>
          <li className="">
            <Link href="/our-work">Наши работы</Link>
          </li>
          <li className="">
            <Link href="/services">Услуги</Link>
          </li>
          <li className="">
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
