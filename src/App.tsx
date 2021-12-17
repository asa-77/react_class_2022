import React from "react";
import "./App.css";
import "./ProductCounter/style.css";
import ProductCounter from "./ProductCounter";
import dress from "./dress.jpg";

const App = () => {
  return (
    <div className="App">
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
  );
};

export default App;
