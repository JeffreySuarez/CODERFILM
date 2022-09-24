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
      <div className="sumarrestar">
        <button
          className="botonsumaryrestar"
          disabled={count <= 1}
          onClick={decrementar}
        >
          -
        </button>
      </div>
      <span className="spanNumber">{count}</span>
      <button
        className="botonsumaryrestar"
        disabled={count >= stock}
        onClick={incrementar}
      >
        <div>+</div>
      </button>
      <div className="contenedorAgregar">
        <button
          className="botonagregar"
          disabled={stock <= 0}
          onClick={() => {
            onAdd(count);
          }}
        >
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
