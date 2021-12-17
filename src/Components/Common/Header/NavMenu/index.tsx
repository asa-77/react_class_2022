import React from "react";
import style from "./NavMenu.module.scss";

type NavMenuPropsType = any;

const NavMenu: React.FC<NavMenuPropsType> = () => {
  return (
    <div className={style.nav_menu_wrapper}>
      <ul className={style.nav_menu}>
        <li> О нас</li>
        <li>Главная</li>
        <li>Новости</li>
        <li>Блог</li>
      </ul>
    </div>
  );
};

export default NavMenu;
