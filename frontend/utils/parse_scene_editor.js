import createContent from "./create_content";

function parseContent(content, actions) {
  const children = content.map(node => {
    if(node.type === "text") {
      return document.createTextNode(node.text);
    } else {
      const parsed = parseContent(node.content, actions);
      const contents = parsed.contents;
      actions = Object.assign(actions, parsed.actions);
      const fragment = document.createDocumentFragment();
      contents.forEach(el => fragment.appendChild(el));
      let newNode = createContent(node, fragment);
      if(!actions[node.idx]) {
        actions[node.idx] = newNode;
      }
      newNode.appendChild(fragment);
      return newNode;
    }
  });
  return ({
    contents: children,
    actions: actions
  });
}

function parseSceneEditor(body) {
  let actions = {};
  const paragraphs = body.map(p => {
    const paragraph = document.createElement("p");
    paragraph.dataset.editorContent = true;
    paragraph.dataset.type = "paragraph";
    const parsed = parseContent(p, actions);
    const contents = parsed.contents;
    actions = Object.assign(actions, parsed.actions);
    const fragment = document.createDocumentFragment();
    contents.forEach(el => fragment.appendChild(el));
    paragraph.appendChild(fragment);
    return paragraph;
  });
  return [paragraphs, actions];
}

export default parseSceneEditor;
