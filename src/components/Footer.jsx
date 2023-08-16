import React from "react";

// todo:
// ссылки на соцсети
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info-container">
        <div className="footer__contacts">
          <p>chikindin@form.me</p>
          <p>+7 999 178-86-55</p>
        </div>
        <div className="footer__social-links">
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
