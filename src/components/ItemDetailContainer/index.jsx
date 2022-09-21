import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
// import Data from "../../api/api.json";
import { useParams } from "react-router-dom";

//importamos lo necesario para usar firebase

import { getFirestore, doc, getDoc } from "firebase/firestore";

/*
A continuacion explico la importacion, en el primer caso traemos firestore, creamos un puntero que es "doc" y despues traeme ese documento que es "getDoc"
*/

//pasos para usar firebase
//1- traer el servicio de firestore.
//2- Crear un puntero al dato que queremos traer.
//3- Traer el dato con una promesa

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleID } = useParams();
  console.log(detalleID);

  // useEffect(() => {
  //   const getData = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(Data);
  //     }, 1000);
  //   });

  //   getData.then((res) =>
  //     setData(
  //       res.find((film) => {
  //         return film.id === Number(detalleID);
  //       })
  //     )
  //   );
  // }, [detalleID]);

  useEffect(() => {
    //primero hacemos el pedido de firestore
    const querydb = getFirestore();
    //en otra variable ejecutamos el Doc
    const queryDoc = doc(querydb, "film", detalleID);
    //lanzamos la promesa
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
    //en el then generamos un objeto para que el id del firebase quede a la misma altura que el titulo, descripcion, precio etc.
  }, []);

  console.log(data.title);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
