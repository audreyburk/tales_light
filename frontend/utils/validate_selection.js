function validateSelection(sel, type) {
  // validation should be a bit different depending on the operation
  // if adding link, make sure its not in multiple elements
  // and isnt inside or around another link
  // a link should be allowed around ifs, though
  // as long as it doesnt split if/else

  checkSplitRange(sel);
  checkCollapsed(sel);
  checkOutside(sel);

  if(type === "link") throw "link!";
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
  // change to check all ranges
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

function setRangeStart(range, ancestor) {
  const node = range.startContainer;
  if(!validRangeNode(node, ancestor)) {
    range.setStartBefore(node);
    setRangeStart(range, ancestor);
  }
}

function setRangeEnd(range, ancestor) {
  const node = range.endContainer;
  if(!validRangeNode(node, ancestor)) {
    range.setEndAfter(node);
    setRangeEnd(range, ancestor);
  }
}

function expandSelection(sel) {
  var ranges = [];
  for(let i = 0; i < sel.rangeCount; i++) {
    var range = sel.getRangeAt(i);
    var ancestor = range.commonAncestorContainer;
    if (ancestor.nodeType === 1) {
      setRangeStart(range, ancestor);
      setRangeEnd(range, ancestor);
    }
    ranges.push(range);
  }

  sel.removeAllRanges();
  for(let j = 0; j < ranges.length; j++) {
    sel.addRange(ranges[j]);
  }
  return;
}

export default validateSelection;
