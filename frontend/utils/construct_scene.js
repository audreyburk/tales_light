function constructObject(node) {
  if(node.nodeType === 3){
    return ([{
      type: "text",
      text: node.textContent
    }]);
  } else {
    const data = node.dataset;
    switch(data.type) {
      case "link":
        return([{
          type: "link",
          linkTo: data.linkTo,
          content: constructArray(node)
        }]);

      case "wrapper":
        return constructArray(node);

      case "paragraph":
        return [constructArray(node)];

    }
  }
}

function constructArray(node) {
  const children = node.childNodes;
  let objects = [];
  for(let i = 0; i < children.length; i++) {
    if(children[i].nodeType === 1 || children[i].nodeType === 3) {
      const object = constructObject(children[i]);
      objects = objects.concat(object);
    }
  }
  objects = objects.filter(Boolean);
  return objects;
}

function constructScene(node) {
  const body = constructArray(node);
  console.log(JSON.stringify(body));
  return JSON.stringify(body);
}

export default constructScene;
