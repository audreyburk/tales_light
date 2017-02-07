import createContent from "./create_content";

function modifySelection(action) {
  const selection = document.getSelection();
  const range = selection.getRangeAt(0);

  // wait, this won't work for nested actions!
  const text = document.createTextNode(range.toString());

  const node = createContent(action, text);

  range.deleteContents();
  range.insertNode(node);
  return node;
}

export default modifySelection;
