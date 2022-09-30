import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Foto from "./foto.jpeg";

const index = () => {
  return (
    <div className="content-Footer">
      <div className="footer-left">
        <h2>
          <span className="logo-left">SOBRE</span>
          <span className="logo-right">MI</span>
        </h2>
        <p>
          Soy un alumno de CODERHOUSE y este es mi proyecto final de React JS
        </p>
      </div>
      <hr />
      <div className="footer-mid">
        <h3 className="footer-mid-subtitulo">DESARROLLADOR</h3>
        <div className="footer-img">
          <img src={Foto} alt="" />
        </div>
        <p>CODERHOUSE Comision : 34730 - 2022</p>
      </div>
      <hr />
      <div className="footer-right">
        <h1>
          <span className="logo-left">CODER</span>
          <span className="logo-right">FILM</span>
        </h1>
        <div className="footer-menu">
          <ul className="footer-list-menu">
            <NavLink className="list-menu" to="/CoderFilm">
              Home
            </NavLink>
            <NavLink
              className="list-menu list-menu-menu"
              to="/CoderFilm/Peliculas"
            >
              Peliculas
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
