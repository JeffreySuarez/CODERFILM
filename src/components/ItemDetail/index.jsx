import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const [gotoCart, setGotoCart] = useState(false);

  //uso del estado useContext
  const { addProduct } = useCartContext();

  const onAdd = (cantidad) => {
    setGotoCart(true);
    addProduct(data, cantidad);
  };
  return (
    <div className="content-itemdetail">
      <div className="detail">
        <img className="detail__img" src={data.imagen} alt={data.title} />

        <div className="content">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>Hay un stock de: {data.stock}</p>
          <p>El precio es: $ {data.price}</p>

          <div className="contentItemCount">
            {gotoCart ? (
              <Link to="/CoderFilm/cart">Terminar Compra</Link>
            ) : (
              <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
      <div className="separador" />
    </div>
  );
};

export default ItemDetail;
