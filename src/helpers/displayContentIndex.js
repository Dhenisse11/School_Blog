import "./displayContentIndex.css";
import "./displayContent.css";

const displayIndexContent = (content) => {
  return (
    <div className="index-bar">
      <h2 className="title">Índice de secciones</h2>
      {content.themes.reduce((prev, item) => {
        prev.push(
          <h3 className="paragraph" key={`index-${item.titles}`}>
            {item.titles}
          </h3>
        );

        return prev;
      }, [])}
    </div>
  );
};

export default displayIndexContent;
