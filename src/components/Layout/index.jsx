import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="content-layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
