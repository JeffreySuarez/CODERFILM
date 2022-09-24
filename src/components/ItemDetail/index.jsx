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
          <div className="content-header-detail">
            <h1 className="content-title-detail">{data.title}</h1>
            <p className="content-description-detail">{data.description}</p>
          </div>

          <div className="content-footer-detail">
            <p className="content-stock-detail">
              Stock: <span className="content-span"> {data.stock}</span>
            </p>
            <p className="content-price-detail">
              Precio:
              <span className="content-span"> $ {data.price}</span>
            </p>
          </div>

          <div className="contentItemCount">
            {gotoCart ? (
              <Link className="LinkTerminarCompra" to="/CoderFilm/cart">
                Terminar Compra
              </Link>
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
