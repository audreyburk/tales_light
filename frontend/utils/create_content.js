function createWrapper(node) {
  const wrapper = document.createElement("span");
  wrapper.setAttribute("contenteditable", false);
  wrapper.dataset.editorContent = true;
  wrapper.dataset.type = "wrapper";
  wrapper.appendChild(bufferSpan());
  wrapper.appendChild(node);
  wrapper.appendChild(bufferSpan());
  return wrapper;

  function bufferSpan() {
    const span = document.createElement("span");
    span.className = "buffer";
    return span;
  }
}

function createContent(action, contents) {
  const node = document.createElement("span");
  node.className = action.type;
  node.dataset.editorContent = true;
  node.setAttribute("contenteditable", true);
  node.appendChild(contents);  // needs to become.... content/fragment

  const keys = Object.keys(action);
  for(let i = 0; i < keys.length; i++) {
    if(keys[i] === "nodes") continue;
    node.dataset[keys[i]] = action[keys[i]];
  }

  const wrapper = createWrapper(node);
  return wrapper;
}

export default createContent;
