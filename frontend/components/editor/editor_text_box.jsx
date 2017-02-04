import React from "react";

class EditorTextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown(div) {
    this.div = div;
    div.addEventListener(
      "keydown", this.preventDeletion.bind(this));
  }

  preventDeletion(e) {
    // also, prevent enter while inside span? keyCode 13
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
      <section className="editor-text-box">
        <div contentEditable="true" data-editor-content
             ref={div => this.handleKeyDown(div)}>
          <p data-editor-content></p>
        </div>
      </section>
    );
  }
}

export default EditorTextBox;
