import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import { useCartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="content-carrovacio">
        <p>No hay elementos en el carrito</p>
        <Link className="linkSeguirComprando" to={"/CoderFilm/Peliculas"}>
          Seguir comprando
        </Link>
      </div>
    );
  }

  console.log(cart);

  console.log("Estos son los productos de productCart: " + cart);

  return (
    <div className="content-cart">
      {cart.map((product) => {
        return <ItemCart key={product.id} product={product} />;
      })}
      <div className="content-footer-cart">
        <p>
          Total: <span> $ {totalPrice()} </span>
        </p>
        <Link className="LinkTerminarCompra" to="/CoderFilm/checkout">
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
