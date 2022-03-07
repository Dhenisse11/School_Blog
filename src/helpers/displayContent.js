const displayContent = (content) => {
  return content.themes.reduce((accumulator, item) => {
    accumulator.push(
      <h2 className="titleh" key={item.titles}>
        {item.titles}
      </h2>
    );
    if (item["paragraph"]) {
      accumulator.push(
        item.paragraph.reduce((acc, it) => {
          acc.push(
            <p className="paragraphs" key={it}>
              {it}
            </p>
          );
          return acc;
        }, [])
      );
    }

    if (item["subtitles"] && item.subtitles.length) {
      accumulator.push(
        item.subtitles.reduce((prev, item) => {
          prev.push(
            <h2 className="titlesh" key={item.title}>
              {item.title}
            </h2>
          );
          prev.push(
            item.paragraph.reduce((prev, item) => {
              prev.push(
                <p className="paragraphs" key={item}>
                  {item}
                </p>
              );

              return prev;
            }, [])
          );

          return prev;
        }, [])
      );
    }

    return accumulator;
  }, []);
};

export default displayContent;
