import React from "react";

import validateSelection from "./../../utils/validate_selection";
import validateAction    from "./../../utils/validate_action";
import modifySelection   from "./../../utils/modify_selection";

import EditorAction from "./editor_action";


class EditorActionFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {actions: []};
    this.applyAction  = this.applyAction.bind(this);
    this.editAction   = this.editAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
  }

  addNode(node, i) {
    const action = this.state.actions[i];
    action.nodes.push(node);
    const newActions = this.state.actions;
    newActions[i] = Object.assign(newActions[i], action);
    this.setState({actions: newActions});
  }

  addAction(e) {
    e.preventDefault();
    const newActions = this.state.actions;
    newActions.push({type: "link", linkTo: 1, nodes: []});
    this.setState({actions: newActions});
  }

  applyAction(i) {
    validateAction(this.state.actions[i], i);
    validateSelection(this.state.actions[i].type);
    const node = modifySelection(this.state.actions[i], i);
    this.addNode(node, i);
  }

  editAction(i, action) {
    const newActions = this.state.actions;
    newActions[i] = Object.assign(newActions[i], action);
    this.setState({actions: newActions});
  }

  removeAction(i) {
    let newActions = this.state.actions;
    newActions[i].nodes.forEach(node => {
      // find a more reliable way to get correct content
      const insides = node.children[1].childNodes;
      const parent = node.parentElement;
      while(insides.length > 0) {
        parent.insertBefore(insides[0], node);
      }
      parent.removeChild(node);
      parent.normalize();
    });
    delete newActions[i];
    newActions = newActions.filter(Boolean);
    this.setState({actions: newActions});
  }

  renderActions() {
    const children = this.state.actions.map((action, i) => {
      return <EditorAction applyAction  = {this.applyAction}
                           editAction   = {this.editAction}
                           removeAction = {this.removeAction}
                           action={action} key={i} i={i} />;
    });
    return <section>{children}</section>;
  }

  render() {
    return(
      <div>
        <h4>Actions</h4>
        {this.renderActions()}
        <button onClick={(e)=>this.addAction(e)}>+ action</button>
      </div>
    );
  }
}

export default EditorActionFrame;
