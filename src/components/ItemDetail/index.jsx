import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [gotoCart, setGotoCart] = useState(false);

  const onAdd = () => {
    setGotoCart(true);
  };
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__img" src={data.thumbnail} alt={data.title} />
        <div className="content">
          <h1>{data.title}</h1>
          {gotoCart ? (
            <Link to="/CoderFilm/cart">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
