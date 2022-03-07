import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title">
          <Link className="nav-begin" to="/">
            Inicio
          </Link>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <Link to="/poo">Programación Orientada a Objetos</Link>
        <Link to="/desarrollo_web">Desarrollo web</Link>
        <Link to="/desarrollo_front">Desarrollo front-end</Link>
      </div>
    </div>
  );
};

export default Navbar;
