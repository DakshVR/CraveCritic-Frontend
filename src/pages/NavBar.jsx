import React from "react";
import { NavLink } from "react-router-dom";
import "../components/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="links">
        <li className="link">
          <NavLink to="/" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/business" className="nav-link">
            Business
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/review" className="nav-link">
            Review
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/photo" className="nav-link">
            Photo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
