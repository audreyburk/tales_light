import React from "react";

class EditorAction extends React.Component {
  constructor(props) {
    super(props);
  }

  handleApply(e) {
    this.props.applyAction(e, this.props.i);
  }

  render() {
    return(
      <article className="editor-action">
        <select>
          <option default>Link</option>
          <option>If</option>
        </select>
        <input type="text"></input>
        <button onClick={(e) => this.handleApply(e)}>Apply Action</button>
      </article>
    );
  }
}

export default EditorAction;
