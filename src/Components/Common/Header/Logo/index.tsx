import React from "react";
import style from "./Logo.module.scss";
import logo from "./logo.jpg";

type LogoPropsType = any;

const Logo: React.FC<LogoPropsType> = () => {
  return (
    <div className={style.logo_wrapper}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
