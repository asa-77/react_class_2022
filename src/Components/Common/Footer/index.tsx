import React from "react";
import style from "./Footer.module.scss";

type FooterPropsType = any;

const Footer: React.FC<FooterPropsType> = () => {
  return (
    <footer className={style.footer_wrapper}>
      <div className={style.description}>Учебный проект по изучению React</div>
      <div className={style.location}>Нижний Новгород</div>
    </footer>
  );
};

export default Footer;
