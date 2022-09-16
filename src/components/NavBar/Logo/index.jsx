import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>
          <h1>CODERFILM</h1>
        </button>
      </Link>
    </div>
  );
};

export default Logo;
