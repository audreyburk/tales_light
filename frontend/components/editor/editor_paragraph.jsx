import React from "react";

class EditorParagraph extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove(e) {
    this.props.removeParagraph(e, this.props.i);
  }

  render() {
    return(
      <article className="editor-paragraph">
        <p contentEditable="true" data-editor-content></p>
        <button onClick={(e) => this.handleRemove(e)}>remove</button>
      </article>
    );
  }
}

export default EditorParagraph;
