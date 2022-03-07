import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Home/Home.css";
import displayContent from "../helpers/displayContent";
import displayIndexContent from "../helpers/displayContentIndex";
import { data } from "../data/data.json";

const ContainerHome = () => {
  const [content, setContent] = useState(data[3]);
  const [elements, setElements] = useState([]);
  const [indexContent, setIndexContent] = useState([]);

  useEffect(() => {
    setIndexContent([...elements, displayIndexContent(content)]);
    setElements([...elements, displayContent(content)]);
  }, []);

  return (
    <div className="container">
      <Header />
      <Navbar></Navbar>
      {indexContent}
      <div className="content">
        <div className="themes">
          <h1>Tabla de contenido</h1>
          <ul className="centered-list">
            <li>- Introducción al desarrollo web.</li>
            <li>- Programación Orientada a Objetos.</li>
            <li>- Desarrollo web.</li>
            <li>- Desarrollo front-end.</li>
          </ul>
        </div>
        <div className="themes-content">
          <h1>Introducción al desarrollo web</h1>
          <p>
            El Desarrollo Web está definido como la creación de sitios web, pero
            realmente es mucho más que eso, en mi opinión, significa crear,
            mantener y trabajar en segundo plano una página web, bien sea
            externa como una extranet, como un internet, o interna como una
            intranet. Para la construcción de estas páginas, se hacen uso de
            herramientas muy importantes como son las bases de datos, que se
            apoyan de servidores y clientes para llenar la información
            pertinente que luego será mostrada en un navegador web
            predeterminado. Usualmente el encargado de este trabajo, es el
            desarrollador web, dejando como función principal el simplemente
            desarrollar, y es que es sencillo, como su nombre lo dice, se
            encarga de la parte de desarrollo, mientras que, el trabajo de
            diseño, le quedaría a un diseñador web. En cuanto a la dificultad de
            llevar a cabo estas actividades, considero que es bastante sencillo
            en temas de herramientas, ya que existen muchos lenguajes,
            frameworks, lenguajes compilados, semi-compilados y demás, que
            facilitan la tarea, en cuanto a dificultad de código es bastante
            complicado y extenso, pero con las herramientas adecuadas se
            consiguen los mejores resultados.
          </p>
        </div>
        <div class="themes-content">
          <h1>Referencias bibliográficas</h1>
          <p>
            - Wikipedia (Sin año). Desarrollo web. Extraído de: [
            <a
              className="link"
              href="https://es.wikipedia.org/wiki/Desarrollo_web"
            >
              https://es.wikipedia.org/wiki/Desarrollo_web
            </a>
            ]. Consultado: (06/04/2021).
          </p>
          <p>
            - Sin autor (2020). CICLO DE VIDA DEL SOFTWARE: TODO LO QUE
            NECESITAS SABER. Extraído de: [
            <a className="link" href="https://cutt.ly/KcG94lU">
              https://cutt.ly/KcG94lU
            </a>
            ]. Consultado: (07/04/2021).
          </p>
          <p>
            - Maluenda de Vega, R (2020). Tipos de desarrollo de aplicaciones
            web: ejemplos y características. Extraído de: [
            <a
              className="link"
              href="https://profile.es/blog/desarrollo-aplicaciones-web/"
            >
              https://profile.es/blog/desarrollo-aplicaciones-web/
            </a>
            ]. Consultado: (07/04/2021).
          </p>
          <p>
            - Ninweb (Sin año). Qué es el Desarrollo Web y sus conceptos
            básicos. Extraído de: [
            <a
              className="link"
              href="https://www.ninweb.net/desarrollo-web-conceptos-basicos/"
            >
              https://www.ninweb.net/desarrollo-web-conceptos-basicos/
            </a>
            ]. Consultado: (07/04/2021).
          </p>
          <p>
            - Hernández, L (2021). 7 tendencias en desarrollo web para 2021.
            Extraído de: [
            <a
              className="link"
              href="https://blog.interdominios.com/7-tendencias-de-desarrollo-web-que-se-esperan-en-2021/"
            >
              https://blog.interdominios.com/7-tendencias-de-desarrollo-web-que-se-esperan-en-2021/
            </a>
            ]. Consultado: (07/04/2021).
          </p>
          <p>
            - Sin autor (2015). 2.1 Arquitectura de las aplicaciones Web.
            Extraído de: [
            <a
              className="link"
              href="https://programacionwebisc.wordpress.com/2-1-arquitectura-de-las-aplicaciones-web/"
            >
              https://programacionwebisc.wordpress.com/2-1-arquitectura-de-las-aplicaciones-web/
            </a>
            ]. Consultado: (07/04/2021).
          </p>
          <p>
            - Baquero, M (2017). ¿Cuál es el flujo de trabajo habitual en la
            creación de páginas y aplicaciones web? Extraído de: [
            <a
              className="link"
              href="https://www.arsys.es/blog/programacion/flujo-trabajo-paginasweb-aplicacionesweb/"
            >
              https://www.arsys.es/blog/programacion/flujo-trabajo-paginasweb-aplicacionesweb/
            </a>
            ]. Consultado: (07/04/2021).
          </p>
        </div>

        <div class="comment-box">
          <h1>Comentarios</h1>
          <div class="comment-items">
            <div class="comment-one">
              👨‍
              <p className="title">Autor</p>
            </div>
            <input
              class="comment-two"
              placeholder="Danos tu opinión..."
            ></input>
            <button class="comment-three" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContainerHome;
