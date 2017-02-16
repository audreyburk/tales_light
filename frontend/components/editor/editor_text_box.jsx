import React from "react";

class EditorTextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="editor-text-box">
        <div contentEditable="true" data-editor-content
             ref={div => this.props.addListener(div)}>
            {this.props.paragraphs}
        </div>
      </section>
    );
  }
}

export default EditorTextBox;
