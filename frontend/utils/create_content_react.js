import React from "react";
import { kebabCase } from "lodash";
const ce = React.createElement;

function createWrapper(node) {
  const props = {
    contentEditable: false,
    "data-editor-content": true,
    "data-type": "wrapper"
  };
  function bufferSpan() {
    return ce("span", {className: "buffer"});
  }

  return ce("span", props, bufferSpan(), node, bufferSpan());
}

function createContentReact(action, contents) {
  const props = {
    className: action.type,
    contentEditable: true,
    "data-editor-content": true
  };
  const keys = Object.keys(action);
  for(let i = 0; i < keys.length; i++) {
    if(keys[i] === "nodes" || keys[i] === "content") continue;
    const key = "data-".concat(kebabCase(keys[i]));
    props[key] = action[keys[i]];
  }
  const node = ce("span", props, contents);
  return createWrapper(node);
}

export default createContentReact;
