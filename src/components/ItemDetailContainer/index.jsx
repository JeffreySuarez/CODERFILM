import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import Data from "../../api/api.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleID } = useParams();
  console.log(detalleID);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data);
      }, 1000);
    });

    getData.then((res) =>
      setData(
        res.find((film) => {
          return film.id === Number(detalleID);
        })
      )
    );
  }, [detalleID]);

  console.log(data.title);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
