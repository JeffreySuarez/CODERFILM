import React from "react";
import CartWidget from "../CartWidget";
import Logo from "./Logo";
import Menu from "./Menu";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="content-navbar">
      <Logo />
      <Menu />
      <CartWidget />
    </div>
  );
};

export default NavBar;
