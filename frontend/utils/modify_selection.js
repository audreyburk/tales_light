function modifySelection(action, i) {
  const selection = document.getSelection();
  const range = selection.getRangeAt(0);
  const text = document.createTextNode(range.toString());
  const node = createContent(action);
  node.setAttribute("contenteditable", true);
  node.appendChild(text);
  node.dataset.actionI = i;
  node.dataset.editorContent = true;
  const wrapper = createWrapper(node);
  range.deleteContents();
  range.insertNode(wrapper);
  return wrapper;
}

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

function createContent(action) {
  const node = document.createElement("span");
  node.className = action.type;
  const keys = Object.keys(action);
  for(let i = 0; i < keys.length; i++) {
    if(keys[i] === "nodes") continue;
    node.dataset[keys[i]] = action[keys[i]];
  }
  return node;
}

export default modifySelection;
