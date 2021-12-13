import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Апельсин", count: 5 }} />
      <ProductCounter product={{ productName: "яблоко", count: 2 }} />
      <ProductCounter product={{ productName: "груша", count: 7 }} />
    </div>
  );
};

export default App;
