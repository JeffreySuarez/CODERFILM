import React from "react";
import { NavLink } from "react-router-dom";
import "./Filter.css";

const index = () => {
  return (
    <div className="content-filter">
      <h2>Filtrar por:</h2>

      <NavLink
        className="NavLink"
        to="/CoderFilm/Peliculas/category/accion/accion"
      >
        Acción
      </NavLink>
      <NavLink
        className="NavLink"
        to="/CoderFilm/Peliculas/category/marvel/marvel"
      >
        Marvel
      </NavLink>
      <NavLink
        className="NavLink"
        to="/CoderFilm/Peliculas/category/terror/terror"
      >
        Terror
      </NavLink>
      <NavLink className="NavLink-fas" to="/CoderFilm/Peliculas">
        <i class="fas fa-reply-all"></i>
      </NavLink>
    </div>
  );
};

export default index;
