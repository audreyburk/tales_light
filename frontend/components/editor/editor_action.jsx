import React from "react";

class EditorAction extends React.Component {
  constructor(props) {
    super(props);
  }

  handleApply(e) {
    e.preventDefault();
    this.props.applyAction(this.props.i);
  }

  handleTypeChange(e) {
    e.preventDefault();
    const action = {type: e.target.value};
    this.props.editAction(this.props.i, action);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeAction(this.props.i);
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
        <button onClick={(e) => this.handleRemove(e)}>Remove</button>
      </article>
    );
  }
}

export default EditorAction;
