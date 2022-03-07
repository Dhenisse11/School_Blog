import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="contenedor-footer">
        <div className="content-foo">
          <h4>Instituto:</h4>
          <a className="link-letter" href="https://webiujocatia.wordpress.com">
            Instituto Universitario "Jesús Obrero"
          </a>
        </div>
        <div className="content-foo">
          <h4>Correo:</h4>
          <p className="letter">catiasoporteeva@iujo.edu.ve</p>
        </div>
        <div className="content-foo">
          <h4>Teléfono:</h4>
          <p className="letter">+58 212-8627172</p>
        </div>
        <div className="content-foo">
          <h4>Locación:</h4>
          <p className="letter">
            Calle Real de los Flores de Catia c/c Andrea Bello, Edif. Jesús
            Obrero. Caracas, Venezuela.
          </p>
        </div>
      </div>
      <h2 className="titulo-final">&copy; IUJO Sede Caracas</h2>
    </footer>
  );
};

export default Footer;
