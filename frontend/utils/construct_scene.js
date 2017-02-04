function text(node) {
  return ({
    type: "text",
    text: node.textContent
  });
}

function link(node) {
  return ({
    type: "link",
    linkTo: node.dataset.linkTo,
    content: content(node)
  });
}

function content(node) {
  let items = [];
  const children = node.childNodes;
  for(let i = 0; i < children.length; i++) {
    const child = children[i];
    if(child.nodeType === 3) {
      items.push(text(child));
    } else if (child.nodeType === 1) {
      switch(child.dataset.type) {
        case "link":
          items.push(link(child));
          break;

        case "wrapper":
          items = items.concat(content(child));
          break;

        case "paragraph":
          items.push(content(child));
          break;
      }
    }
  }
  return items;
}

function constructScene(node) {
  const body = content(node);
  console.log(JSON.stringify(body));
  return JSON.stringify(body);
}

export default constructScene;
