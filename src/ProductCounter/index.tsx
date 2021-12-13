import React from "react";
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
      <h1>{productName}</h1>
      <span>{count}</span>
    </div>
  );
};

export default ProductCounter;
