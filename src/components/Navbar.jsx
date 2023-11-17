"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import brandLogo from "public/svg/brand_logo.svg";
import { setLoadingState } from "@/store/loadingStateSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setLoadingState("loading"));
  }

  return (
    <nav className="bg-neutral-100">
      <div className="relative flex items-center justify-center h-header">
        <div className="absolute start-8">
          <Link href="/" onClick={handleClick}>
            <Image className="" src={brandLogo} alt="brand logo" />
          </Link>
        </div>
        <ul className="items-center gap-navbar-links uppercase hidden sm:flex">
          <li className="hover:text-brand-primary-400 duration-300">
            <Link href="/about-us" onClick={handleClick}>
              О нас
            </Link>
          </li>
          <li className="hover:text-brand-primary-400 duration-300">
            <Link href="/our-work" onClick={handleClick}>
              Наши работы
            </Link>
          </li>
          <li className="hover:text-brand-primary-400 duration-300">
            <Link href="/services" onClick={handleClick}>
              Услуги
            </Link>
          </li>
          <li className="hover:text-brand-primary-400 duration-300">
            <Link href="/contacts" onClick={handleClick}>
              Контакты
            </Link>
          </li>
        </ul>
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
