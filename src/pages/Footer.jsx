import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <NavLink to="/" className="footer-link">
          Home
        </NavLink>
        <NavLink to="/about" className="footer-link">
          About
        </NavLink>
        <NavLink to="/contact" className="footer-link">
          Contact
        </NavLink>
      </nav>
      <div className="icons">
        <a href="#" className="icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
