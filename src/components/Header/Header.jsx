import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo institucional"
          className="institutional_logo"
        />
      </Link>
      <h1 className="tittle_header">Desarrollo Informático</h1>
      <h2 className="tittle_header">{title}</h2>
      <div className="author_container">
        <h3 className="author_header">Portal educativo by IUJO</h3>
      </div>
    </div>
  );
};

export default Header;
