import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        {children} <Outlet />
      </main>
      {/* <main>
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
}
