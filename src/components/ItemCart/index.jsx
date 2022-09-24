import React from "react";
import { useCartContext } from "../context/CartContext";
import "./ItemCart.css";

const index = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.imagen} alt={product.title} />
      <div className="content-itemCart">
        <p>
          Titulo: <span> {product.title}</span>
        </p>
        <p>
          Cantidad: <span>{product.cantidad}</span>
        </p>
        <p>
          Precio unidad: <span> $ {product.price}</span>
        </p>
        <p>
          Subtotal: <span> $ {product.cantidad * product.price}</span>
        </p>
        {/* Usaremos la funcion para eliminar el producto con el context */}

        <button
          className="button-itemCart"
          onClick={() => removeProduct(product.id)}
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default index;
