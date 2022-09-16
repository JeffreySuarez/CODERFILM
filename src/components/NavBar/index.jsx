import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;
