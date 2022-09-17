import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={decrementar}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={incrementar}>
        +
      </button>
      <div>
        <button
          disabled={stock <= 0}
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
