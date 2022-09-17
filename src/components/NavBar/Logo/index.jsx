import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="content-logo-menu">
      <Link className="link-logo" to={"/"}>
        <button className="button-logo">
          <h1>
            <span className="logo-left">CODER</span>
            <span className="logo-right">FILM</span>
          </h1>
        </button>
      </Link>
    </div>
  );
};

export default Logo;
