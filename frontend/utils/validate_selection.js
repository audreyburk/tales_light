function validateSelection(type) {
  const sel = document.getSelection();
  checkCollapsed(sel);
  checkMultipleRanges(sel);
  checkOutside(sel);
  checkSplitRange(sel);

  if(type === "link") {
    checkContainsLink(sel);
    checkInsideLink(sel);
  }
}

function checkCollapsed(sel) {
  if(sel.isCollapsed) throw "nothing selected";
}

function checkMultipleRanges(sel) {
  if(sel.rangeCount > 1) throw "too many selections";
}

function checkOutside(sel) {
  if(
    !sel.anchorNode.parentElement.dataset.editorContent ||
    !sel.focusNode.parentElement.dataset.editorContent
  ) {
    throw "selection is outside editor";
  }
}

function checkContainsLink(sel) {
  if (sel.anchorNode === sel.focusNode) return;
  let node = sel.anchorNode;
  while(node.nextSibling !== sel.focusNode) {
    node = node.nextSibling;
    if(node.nodeType === 1) {
      containsLink(node);
    }
  }
}

function containsLink(node) {
  if(node.dataset.type === "link") throw "selection contains a link!";
  for(let i = 0; i < node.children.length; i++) {
    containsLink(node.children[i]);
  }
}

function checkInsideLink(sel) {
  let node = sel.getRangeAt(0).commonAncestorContainer;
  if(node.nodeType === 3) node = node.parentElement;
  while(node.parentElement.dataset.editorContent) {
    if(node.dataset.type === "link") throw "inside a link!";
    node = node.parentElement;
  }
}

function checkSplitRange(sel) {
  const range = sel.getRangeAt(0);
  if(splitRange(range)) {
    expandSelection(sel);
    throw "partial selection; fixed it!";
  }
}

function splitRange(range) {
  const ancestor  = range.commonAncestorContainer;
  const startNode = range.startContainer;
  const endNode   = range.endContainer;
  return(
    !(validRangeNode(startNode, ancestor) &&
      validRangeNode(endNode,   ancestor))
  );
}

function validRangeNode(node, ancestor) {
  return(
    (node.parentNode === ancestor && node.nodeType === 3) ||
    node === ancestor
  );
}

function setRangeStart(range) {
  const node = range.startContainer;
  const ancestor = range.commonAncestorContainer;
  if(!validRangeNode(node, ancestor)) {
    range.setStartBefore(node);
    setRangeStart(range, ancestor);
  }
}

function setRangeEnd(range) {
  const node = range.endContainer;
  const ancestor = range.commonAncestorContainer;
  if(!validRangeNode(node, ancestor)) {
    range.setEndAfter(node);
    setRangeEnd(range, ancestor);
  }
}

function expandSelection(sel) {
  const range = sel.getRangeAt(0);
  setRangeStart(range);
  setRangeEnd(range);
  sel.removeAllRanges();
  sel.addRange(range);
}

export default validateSelection;
