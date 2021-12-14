import React from "react";
import "./App.css";
import "./ProductCounter/styl.css";
import ProductCounter from "./ProductCounter";
import dress from "./dress.jpg";

const App = () => {
  return (
    <div className="App">
      <ProductCounter
        product={{
          productName: "Летнее платье",
          count: 5,
          logo: <img src={dress} className="product_dress" alt="" />,
        }}
      />
    </div>
  );
};

export default App;
