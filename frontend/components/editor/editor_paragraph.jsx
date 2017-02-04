import React from "react";

class EditorParagraph extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove(e) {
    e.preventDefault();
    // this.node.parentNode.removeChild(this.node);
    this.props.removeParagraph();
  }

  handleKeyDown(div) {
    this.div = div;
    div.addEventListener(
      "keydown", this.preventDeletion.bind(this));
  }

  preventDeletion(e) {
    if(this.div.children.length === 1 &&
       this.div.children[0].textContent === "") {
        if(e.keyCode === 8 || e.keyCode === 46) {
          e.preventDefault();
          e.stopPropagation();
      }
    }
  }

  render() {
    return(
      <section className="editor-paragraph">
        <div contentEditable="true" data-editor-content
             ref={div => this.handleKeyDown(div)}>
          <p data-editor-content></p>
        </div>
        <button onClick={(e) => this.handleRemove(e)}>remove</button>
      </section>
    );
  }
}

export default EditorParagraph;
