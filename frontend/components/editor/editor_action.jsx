import React from "react";

import EditorActionLink from "./editor_action_link";
import EditorActionIf   from "./editor_action_if";

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

  renderPanel() {
    switch(this.props.action.type) {
      case "link":
        return <EditorActionLink i={this.props.i}
                editAction={this.props.editAction}/>;
      case "if":
        return <EditorActionIf i={this.props.i}
                editAction={this.props.editAction}/>;
    }
  }

  render() {
    return(
      <article className="editor-action">
        <select value={this.props.action.type}
                onChange={(e) => this.handleTypeChange(e)}>
          <option value="link">Link</option>
          <option value="if">If</option>
          <option value="if-else">If/Else</option>
        </select>
        {this.renderPanel()}
        <button onClick={(e) => this.handleApply(e)}>Apply Action</button>
        <button onClick={(e) => this.handleRemove(e)}>Remove</button>
      </article>
    );
  }
}

export default EditorAction;
