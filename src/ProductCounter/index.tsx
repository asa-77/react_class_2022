import React from "react";
import dress from "./dress.jpg";
import "./styl.css";

type ProductCounterPropsType = {
  product: {
    productName: string;
    count: number;
  };
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const {
    product: { productName, count = "нет информации" },
  } = props;

  return (
    <div className="product_counter">
      <img src={dress} className="product_dress" alt="" />
      <h1>{productName}</h1>
      <span>{count}</span>
    </div>
  );
};

export default ProductCounter;
