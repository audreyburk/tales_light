function validateSelection(sel, type) {
  // validation should be a bit different depending on the operation
  // if adding link, make sure its not in multiple elements
  // and isnt inside or around another link
  // a link should be allowed around ifs, though
  // as long as it doesnt split if/else

  checkCollapsed(sel);
  checkMultipleRanges(sel);
  checkOutside(sel);
  checkSplitRange(sel);

  if(type === "link") throw "link!";
}

function checkMultipleRanges(sel) {
  if(sel.rangeCount > 1) throw "too many selections";
}

function checkCollapsed(sel) {
  if(sel.isCollapsed) throw "nothing selected";
}

function checkOutside(sel) {
  if(
    !sel.anchorNode.parentElement.dataset.editorContent ||
    !sel.focusNode.parentElement.dataset.editorContent
  ) {
    throw "selection is outside editor";
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
