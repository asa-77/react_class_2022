import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Летнее платье", count: 5 }} />
    </div>
  );
};

export default App;
