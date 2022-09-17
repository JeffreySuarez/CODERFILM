import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const index = () => {
  return (
    <Link className="link-content" to={"/CoderFilm"}>
      <button className="button">
        <span className="span-arr">
          <i class="fas fa-caret-right"></i>
        </span>
        <div className="content-button">
          <span className="span-hover"></span>
        </div>
        <h4> INGRESAR</h4>
      </button>
    </Link>
  );
};

export default index;
