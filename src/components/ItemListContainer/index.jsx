import React, { useState } from "react";
import "./ItemListContainer.css";

import ItemList from "../ItemList";
// import Data from "../../api/api.json";
import { useEffect } from "react";
import Filter from "../Filter";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

//importamos firebase
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const index = () => {
  const [data, setData] = useState([]);

  const { categoriaID } = useParams();

  console.log(categoriaID);

  // useEffect(() => {
  //   const getData = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(Data);
  //     }, 1000);
  //   });
  //   if (categoriaID) {
  //     getData.then((res) =>
  //       setData(res.filter((film) => film.category === categoriaID))
  //     );
  //   } else {
  //     getData.then((res) => setData(res));
  //   }
  // }, [categoriaID]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "film");

    //nos hace falta el tema de categorias para eso importamos el quey y el where y lo hacemos despues de obtener la coleccion.

    if (categoriaID) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaID)
      );
      //en lo anterior anidamos para ser mas especifico, añadimos en una constante el metodo query donde anidamos queryCollection y usamos un metodo where donde hacemos como una condicional, si category es igual a categoriaID.

      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }

    //en la condicional lo que se hizo fue que si existe categoiaID entonces hacemos el query donde obtenemos el filtrado y lo mostramos segun su categoriaID, y si no hay dejamos toda la coleccion.
  }, [categoriaID]);

  return (
    <div className="content-itemListContainer">
      <Filter />
      {/* {!data ? <Loading /> : <ItemList datosFilm={data} />} */}
      <ItemList datosFilm={data} />
    </div>
  );
};

export default index;
