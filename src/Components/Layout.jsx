import React from "react";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
