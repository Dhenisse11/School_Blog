import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { data } from "../data/data.json";
import displayContent from "../helpers/displayContent";
import displayIndexContent from "../helpers/displayContentIndex";
import "../helpers/displayContent.css";

const ContainerDesweb = () => {
  const [content, setContent] = useState(data[1]);
  const [elements, setElements] = useState([]);
  const [indexContent, setIndexContent] = useState([]);

  useEffect(() => {
    setIndexContent([...elements, displayIndexContent(content)]);
    setElements([...elements, displayContent(content)]);
  }, []);

  return (
    <div className="container">
      <Header title={content.title}></Header>
      <Navbar></Navbar>
      {indexContent}
      {elements}
      <Footer />
    </div>
  );
};

export default ContainerDesweb;
