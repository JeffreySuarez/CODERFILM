import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="content-menu">
      <ul className="lista-menu">
        <NavLink className="menu" to="/CoderFilm">
          <i className="fas fa-house-user "></i>
        </NavLink>
        <NavLink className="menu" to="/CoderFilm/Peliculas">
          <i className="fas fa-film "></i>
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
