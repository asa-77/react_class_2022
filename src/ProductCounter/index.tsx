import React from "react";
import "./style.css";

type ProductCounterPropsType = {
  product: {
    productName: string;
    count: number;
    logo: any;
  };
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const {
    product: { productName, count = "нет информации", logo },
  } = props;

  return (
    <div className="product_counter">
      <div>{logo}</div>
      <button type="button">Быстрый просмотр</button>
      <button type="button">В корзину</button>
      <h1>{productName}</h1>
      <span>{count}</span>
    </div>
  );
};

export default ProductCounter;
