import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/business">Business</NavLink>
      <NavLink to="/review">Review</NavLink>
      <NavLink to="/photo">Photo</NavLink>
    </nav>
  );
}
