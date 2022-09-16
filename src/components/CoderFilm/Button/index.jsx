import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Link to={"/CoderFilm"}>
      <button>
        <h1>INGRESAR</h1>
      </button>
    </Link>
  );
};

export default index;
