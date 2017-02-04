import React from "react";

import validateSelection from "./../../utils/validate_selection";

import EditorAction from "./editor_action";


class EditorActionFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {actions: []};
    this.applyAction = this.applyAction.bind(this);
    this.editAction = this.editAction.bind(this);
  }

  applyAction(e, i) {
    e.preventDefault();
    const action = this.state.actions[i];
    const selection = document.getSelection();
    validateSelection(selection, action.type);
    const range = selection.getRangeAt(0);
    const text = document.createTextNode(range.toString());
    let node;
    if(action.type === "link") {
      node = this.createLink(text, i);
    }
    const wrapper = this.createWrapper(node);
    range.deleteContents();
    range.insertNode(wrapper);
  }

  createWrapper(node) {
    const wrapper = document.createElement("span");
    wrapper.setAttribute("contenteditable", false);
    wrapper.dataset.editorContent = true;
    wrapper.appendChild(this.blankSpan());
    wrapper.appendChild(node);
    wrapper.appendChild(this.blankSpan());
    return wrapper;
  }

  createLink(text, i) {
    const link = document.createElement("span");
    link.setAttribute("contenteditable", true);

    link.appendChild(text);
    link.className = "link";
    link.dataset.type = "link";
    link.dataset.i = i;
    link.dataset.editorContent = true;
    return link;
  }

  blankSpan() {
    const span = document.createElement("span");
    span.className = "blank";
    return span;
  }

  addAction(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    newState.actions.push({type:"link"});
    this.setState(newState);
  }

  editAction(e, i, action) {
    e.preventDefault();
    const newActions = this.state.actions;
    newActions[i] = Object.assign(newActions[i], action);
    this.setState({actions: newActions});
  }

  renderActions() {
    const children = this.state.actions.map((action, i) => {
      return <EditorAction applyAction={this.applyAction}
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
