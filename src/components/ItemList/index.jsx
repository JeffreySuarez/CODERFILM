import React from "react";
import Item from "../Item";

import "./ItemList.css";

const ItemList = ({ datosFilm = [] }) => {
  return (
    <div className="content-itemlist">
      {datosFilm.map((el) => {
        return <Item element={el} key={el.id} />;
      })}
    </div>
  );
};

export default ItemList;
