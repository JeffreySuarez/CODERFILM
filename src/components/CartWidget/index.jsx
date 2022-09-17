import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <NavLink to="/CoderFilm/cart">
        <i className="fas fa-shopping-cart"></i>
      </NavLink>
    </div>
  );
};

export default CartWidget;
