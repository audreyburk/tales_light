import createContentReact from "./create_content_react";
import React from "react";

const ce = React.createElement;

function parseContent(content, actions) {
  const children = content.map(node => {
    if(node.type === "text") {
      return node.text;
    } else {
      debugger
      const parsed = parseContent(node.content, actions);
      const contents = parsed.contents;
      actions = Object.assign(actions, parsed.actions); // array
      let newNode = createContentReact(node, ...contents);
      if(!actions[node.idx]) { // nah, just always do it
        //all but idx & content
        actions[node.idx] = {
          type: node.type
        };
        actions[node.idx].nodes = actions[node.idx].nodes || [];
        actions[node.idx].nodes.push(newNode); // gotta be a ref, now?
      }
      return newNode;
    }
  });
  return ({
    contents: children,
    actions: actions
  });
}

function parseSceneEditorReact(scene) {
  let actions = {};
  const props = {
    "data-editor-content": true,
    "data-type": "paragraph"
  };
  const paragraphs = scene.body.map(p => {
    const parsed = parseContent(p, actions);
    const contents = parsed.contents;
    actions = Object.assign(actions, parsed.actions);
    return ce("p", props, ...contents);
  });
  return {paragraphs: paragraphs, actions: actions};
}

export default parseSceneEditorReact;
