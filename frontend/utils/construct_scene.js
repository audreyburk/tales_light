function constructChunk(chunk) {
  if(chunk.nodeType === 3){
    return ({
      type: "text",
      text: chunk.textContent
    });
  } else {
    const data = chunk.dataset;
    switch(data.type) {
      case "link":
        return({
          type: "link",
          linkTo: data.linkTo,
          text: chunk.textContent
        });

      case "transaction":
        return;

      default:
        throw "unknown data type";
    }
  }
}

function constructParagraph(p) {
  const nodes = p.childNodes;
  const chunks = [];
  for(let i = 0; i < nodes.length; i++) {
    if(nodes[i].nodeType === 1 || nodes[i].nodeType === 3) {
      const chunk = constructChunk(nodes[i]);
      chunks.push(chunk);
    }
  }
  return chunks;
}

function constructScene() {
  const editor = document.getElementById("text-editor");
  const children = editor.children;
  const body = [];

  for(let i = 0; i < children.length; i++) {
    body.push(constructParagraph(children[i]));
  }

  console.log(JSON.stringify(body));
  return JSON.stringify(body);
}

export default constructScene;
