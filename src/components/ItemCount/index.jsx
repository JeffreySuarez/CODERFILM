import React from "react";
import "./ItemCount.css";

const ItemCount = () => {
  return (
    <div className="counter">
      <button>-</button>
      <span>2</span>
      <button>+</button>
      <div>
        <button>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
