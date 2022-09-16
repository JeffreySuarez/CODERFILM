import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <Link to={"/CoderFilm"}>HOME</Link>
        <Link to={"/CoderFilm/Peliculas"}>PELICULAS</Link>
        <Link to={"/CoderFilm/Series"}>SERIES</Link>
        <Link to={"/CoderFilm/Contacto"}>CONTACTO</Link>
      </ul>
    </div>
  );
};

export default Menu;
