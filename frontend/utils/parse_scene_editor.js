import React from "react";

import {
  createWrapper, // takes node, ie link span
                 // includes bufferSpan
  createContent  // takes in an object with all the to-be dataset values

} from "";

// OH SHIT WE NEED TO MAKE ALL NEW ACTIONS ! ! !

const ce = React.createElement;

function parseContent(content, actions) {
  const children = content.map(node => {
    switch(node.type){
      case "text":
        return node.text;

      case "link":
        // remember to add refs to actions
        // again, probably use ALL nodes properties minus a few
        // for link, if, else, etc, no need to differentiate
        const props = {linkTo: node.linkTo};
        const contents = parseContent(node.content);
        return ce("b", props, ...contents);

      default:
        throw("Bad scene data");
    }
  });
  return children;
}




function parseSceneEditor(body) {
  const actions = [];
  const props = {
    "data-editor-content": true,
    "data-type": "paragraph"
  };
  const paragraphs = body.map(p => {
    const contents = parseContent(p, actions);
    return ce("p", props, ...contents);
  });
  return [paragraphs, actions];
}








export default parseSceneEditor;
