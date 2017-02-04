import React from "react";

class EditorAction extends React.Component {
  constructor(props) {
    super(props);
  }

  handleApply(e) {
    this.props.applyAction(e, this.props.i);
  }

  handleTypeChange(e) {
    const action = {type: e.target.value};
    this.props.editAction(e, this.props.i, action);
  }

  render() {
    return(
      <article className="editor-action">
        <select onChange={(e) => this.handleTypeChange(e)}>
          <option value="link" default>Link</option>
          <option value="if">If</option>
        </select>
        <input type="text"></input>
        <button onClick={(e) => this.handleApply(e)}>Apply Action</button>
      </article>
    );
  }
}

export default EditorAction;
