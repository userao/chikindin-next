import React from "react";
import Image from "next/image";
import tLogo from "public/svg/t_logo.svg";
import instaLogo from "public/svg/insta_logo.svg";

// todo:
// ссылки на соцсети
const Footer = () => {
  return (
    <footer className="bg-neutral-100">
      <div className="flex items-center justify-between h-footer px-6">
        <div className="">
          <p>chikindin@form.me</p>
          <p>+7 999 178-86-55</p>
        </div>
        <div className="flex gap-6">
          <a href="#">
            <Image src={tLogo} alt="instagram link" />
          </a>
          <a href="#">
            <Image src={instaLogo} alt="telegram link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
