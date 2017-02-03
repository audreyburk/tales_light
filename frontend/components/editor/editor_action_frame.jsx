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
    const selection = document.getSelection();
    validateSelection(selection);
    // Node.normalize() will gett rid of weird text nodes

    const range = selection.getRangeAt(0);
    const text = document.createTextNode(range.toString());
    const wrapper = document.createElement("span");
    wrapper.setAttribute("contenteditable", false);
    const link = document.createElement("span");
    link.setAttribute("contenteditable", true);

    link.appendChild(text);
    link.className = "link";
    link.dataset.i = i;
    link.dataset.editorContent = true;

    wrapper.appendChild(this.blankSpan());
    wrapper.appendChild(link);
    wrapper.appendChild(this.blankSpan());

    range.deleteContents();
    range.insertNode(wrapper);
  }

  blankSpan() {
    const span = document.createElement("span");
    // span.setAttribute("contenteditable", false);
    span.className = "blank";
    return span;
  }

  addAction(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    newState.actions.push({type:"link"});
    this.setState(newState);
  }

  editAction(e, i) {

  }

  actions() {
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
        {this.actions()}
        <button onClick={(e)=>this.addAction(e)}>+ action</button>
      </div>
    );
  }
}

export default EditorActionFrame;
