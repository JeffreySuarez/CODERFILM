import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ element }) => {
  return (
    <Link to={`/CoderFilm/detalle/${element.id}`} className="item-film">
      <img src={element.thumbnail} alt={element.title} />
      <div className="text">
        <h3>{element.title}</h3>
        <p>{element.description}</p>
      </div>
    </Link>
  );
};

export default Item;
