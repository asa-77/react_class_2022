import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import ProductCounter from "../ProductCounter";
import style from "./MainPage.module.scss";
import dress from "./dress.jpg";
import "../ProductCounter/style.css";

type MainPagePropsType = any;

const MainPage: React.FC<MainPagePropsType> = () => {
  return (
    <div className={style.main_page_wrapper}>
      <Header />
      <div className={style.product}>
        <ProductCounter
          product={{
            productName: "Летнее платье",
            count: 1999,
            logo: <img src={dress} className="product_dress" alt="" />,
          }}
        />
        <ProductCounter
          product={{
            productName: "Летнее платье",
            count: 1999,
            logo: <img src={dress} className="product_dress" alt="" />,
          }}
        />
        <ProductCounter
          product={{
            productName: "Летнее платье",
            count: 1999,
            logo: <img src={dress} className="product_dress" alt="" />,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
