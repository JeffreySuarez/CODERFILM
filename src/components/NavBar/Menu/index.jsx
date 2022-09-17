import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <ul className="lista-menu">
        <NavLink className="menu" to="/CoderFilm">
          HOME
        </NavLink>
        <NavLink className="menu" to="/CoderFilm/Peliculas">
          PELICULAS
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
