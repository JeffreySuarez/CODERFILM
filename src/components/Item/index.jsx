import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ element }) => {
  return (
    <Link to={`/CoderFilm/detalle/${element.id}`} className="item-film">
      <img src={element.imagen} alt={element.title} />
      <div className="info">
        <h3>{element.title}</h3>
      </div>
    </Link>
  );
};

export default Item;
