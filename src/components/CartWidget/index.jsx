import React from "react";
import { NavLink } from "react-router-dom";
import "./CartWidget.css";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProduct } = useCartContext();
  return (
    <div className="content-cartwidget">
      <NavLink className="logo-carrito" to="/CoderFilm/cart">
        <i className="fas fa-shopping-cart carrito">
          <div className="div-span">
            <span>{totalProduct() || ""}</span>
          </div>
        </i>
      </NavLink>
    </div>
  );
};

export default CartWidget;
