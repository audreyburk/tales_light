import React from "react";

import constructScene from "./../../utils/construct_scene";

class EditorTextBox extends React.Component {
  constructor(props) {
    super(props);
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

  handleKeyDown(div) {
    this.div = div;
    div.addEventListener(
      "keydown", this.preventDeletion.bind(this));
    }

    handleConstruct(e) {
      e.preventDefault();
      constructScene(this.div);
    }

  render() {
    return(
      <section className="editor-text-box">
        <div contentEditable="true" data-editor-content
             ref={div => this.handleKeyDown(div)}>
          <p data-editor-content data-type="paragraph"></p>
        </div>
        <button onClick={(e) => this.handleConstruct(e)}>Construct</button>
      </section>
    );
  }
}

export default EditorTextBox;
