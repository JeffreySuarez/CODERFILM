import React, { useState } from "react";
import "./ItemListContainer.css";

import ItemList from "../ItemList";
import Data from "../../api/api.json";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const index = () => {
  const [data, setData] = useState([]);

  const { categoriaID } = useParams();

  console.log(categoriaID);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data);
      }, 1000);
    });
    if (categoriaID) {
      getData.then((res) =>
        setData(res.filter((film) => film.category === categoriaID))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaID]);

  return (
    <div className="content-itemListContainer">
      <div>
        <h2>Filtrar por:</h2>
        <NavLink to="/CoderFilm/Peliculas">Todo</NavLink>
        <NavLink to="/CoderFilm/Peliculas/category/accion/accion">
          Acción
        </NavLink>
        <NavLink to="/CoderFilm/Peliculas/category/marvel/marvel">
          Marvel
        </NavLink>
        <NavLink to="/CoderFilm/Peliculas/category/terror/terror">
          Terror
        </NavLink>
      </div>

      <ItemList datosFilm={data} />
    </div>
  );
};

export default index;
