import React from "react";

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
            <img src="svg/t_logo.svg" alt="instagram link" />
          </a>
          <a href="#">
            <img src="svg/insta_logo.svg" alt="telegram link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
