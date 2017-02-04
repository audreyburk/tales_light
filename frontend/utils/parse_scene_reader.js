import React from "react";

const ce = React.createElement;

function parseContent(p, handleClick) {
  const children = p.map(node => {
    switch(node.type){
      case "text":
        return node.text;

      case "link":
        const props = { onClick: (e) => handleClick(e, node.linkTo) };
        const contents = parseContent(node.content);
        return ce("b", props, ...contents);

      default:
        throw("Bad scene data");
    }
  });
  return children;
}

function parseSceneReader(sceneBody, handleClick) {
  const paragraphs = sceneBody.map(p => {
    const contents = parseContent(p, handleClick);
    return ce("p", null, ...contents);
  });
  return ce("div", null, ...paragraphs);
}

export default parseSceneReader;
