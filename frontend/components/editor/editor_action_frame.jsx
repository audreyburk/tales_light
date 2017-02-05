import React from "react";

import validateSelection from "./../../utils/validate_selection";
import validateAction    from "./../../utils/validate_action";
import modifySelection   from "./../../utils/modify_selection";

import EditorAction from "./editor_action";


class EditorActionFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {actions: []};
    this.count = 0;

    this.applyAction  = this.applyAction.bind(this);
    this.editAction   = this.editAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
  }

  storeNode(idx, node) {
    const action = this.state.actions[idx];
    action.nodes.push(node);
    const newActions = this.state.actions;
    newActions[idx] = Object.assign(newActions[idx], action);
    this.setState({actions: newActions});
  }

  addAction(e) {
    e.preventDefault();
    const newActions = this.state.actions;
    newActions.push({type: "link", idx: this.count, nodes: []});
    this.count++;
    this.setState({actions: newActions});
  }

  applyAction(idx) {
    validateAction(this.state.actions[idx]);
    validateSelection(this.state.actions[idx].type);
    const node = modifySelection(this.state.actions[idx]);
    this.storeNode(idx, node);
  }

  editAction(idx, action) {
    const newActions = this.state.actions;
    newActions[idx] = Object.assign(newActions[idx], action);
    this.setState({actions: newActions});
  }

  // I GOT IT ALL WRONG
  // NO NEED TO CHANGE INDICES
  // JUST KEEP INCREMENTING

  removeAction(idx) {
    let newActions = this.state.actions;
    newActions[idx].nodes.forEach(node => {
      // find a more reliable way to get correct content
      const insides = node.children[1].childNodes;
      const parent = node.parentElement;
      while(insides.length > 0) {
        parent.insertBefore(insides[0], node);
      }
      parent.removeChild(node);
      parent.normalize();
    });
    delete newActions[idx];
    newActions = newActions.filter(Boolean);
    this.setState({actions: newActions});
  }

  renderActions() {
    const children = this.state.actions.map(action => {
      return <EditorAction applyAction  = {this.applyAction}
                           editAction   = {this.editAction}
                           removeAction = {this.removeAction}
                           action={action} key={action.idx} />;
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
