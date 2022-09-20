import React from "react";
import { useCartContext } from "../context/CartContext";
import "./ItemCart.css";

const index = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="itemCart">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <p>Titulo: {product.title}</p>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio unidad : {product.price}</p>
        <p>Subtotal: ${product.cantidad * product.price}</p>
        {/* Usaremos la funcion para eliminar el producto con el context */}
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default index;
