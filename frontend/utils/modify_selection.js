function modifySelection(action, i) {
  const selection = document.getSelection();
  const range = selection.getRangeAt(0);
  const text = document.createTextNode(range.toString());
  let node;
  if(action.type === "link") {
    node = createLink(text, i);
  }
  const wrapper = createWrapper(node);
  range.deleteContents();
  range.insertNode(wrapper);
  return wrapper;
}

function createWrapper(node) {
  const wrapper = document.createElement("span");
  wrapper.setAttribute("contenteditable", false);
  wrapper.dataset.editorContent = true;
  wrapper.appendChild(blankSpan());
  wrapper.appendChild(node);
  wrapper.appendChild(blankSpan());
  return wrapper;
}

function createLink(text, i) {
  const link = document.createElement("span");
  link.setAttribute("contenteditable", true);
  link.appendChild(text);
  link.className = "link";
  link.dataset.type = "link";
  link.dataset.i = i;
  link.dataset.editorContent = true;
  return link;
}

function blankSpan() {
  const span = document.createElement("span");
  span.className = "blank";
  return span;
}

export default modifySelection;
