import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/"}>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
