import React from "react";

import validateSelection from "./../../utils/validate_selection";
import constructScene from './../../utils/construct_scene';

class EditorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById("text-editor").focus();
  }

  addLink(e) {
    const selection = document.getSelection();
    validateSelection(selection);

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.dataset.editorContent = true;
    span.dataset.type = "link";
    span.dataset.linkTo = "1";
    range.surroundContents(span);
  }

  render() {
    return(
      <div>
        <h3>Editor</h3>
        <button onClick={(e)=>this.addLink(e)}>Link.</button>
        <button onClick={(e)=>constructScene(e)}>Construct.</button>
        <div id="text-editor" data-editor-content contentEditable>
          <p data-editor-content>
            set <span data-editor-content
                      data-type="link"
                      data-link-to="1">min</span> height?
          </p>
          <p data-editor-content>
            <span data-editor-content id="outer"><span data-editor-content id="inner">This</span> is</span> odd.
          </p>
        </div>
      </div>
    );
  }
}

export default EditorDisplay;
