// import React from "react";
// import { Navbar } from "react-bootstrap";
import "./Layout.css";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../Utilities/NavBar";

function Layout() {
  return (
    <div className="pt-5">
      <NavBar></NavBar>
      <div className="container">
<Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
