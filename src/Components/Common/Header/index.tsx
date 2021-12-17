import React from "react";
import style from "./Header.module.scss";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserInfo from "./UserInfo";

type HeaderPropsType = any;

const Header: React.FC<HeaderPropsType> = () => {
  return (
    <header className={style.header_wrapper}>
      <Logo />
      <NavMenu />
      <UserInfo />
    </header>
  );
};

export default Header;
