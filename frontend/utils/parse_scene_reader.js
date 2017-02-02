import React from "react";

const ce = React.createElement;

function parseParagraph(p, handleClick) {
  const children = p.map(node => {
    switch(node.type){
      case "text":
        return node.text;

      case "link":
        const props = { onClick: (e) => handleClick(e, node.linkTo) };
        return ce("b", props, node.text);

      default:
        throw("Bad scene data");
    }
  });
  return ce("p", null, ...children);
}

function parseSceneReader(sceneBody, handleClick) {
  const paragraphs = sceneBody.map(p => {
    return parseParagraph(p, handleClick);
  });
  return ce("div", null, ...paragraphs);
}

export default parseSceneReader;
