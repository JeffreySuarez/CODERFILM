import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="content-layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
