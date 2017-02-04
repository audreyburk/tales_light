import React from "react";

import EditorActionFrame from "./editor_action_frame";
import EditorParagraph   from "./editor_paragraph";

import constructScene    from './../../utils/construct_scene';


class EditorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // document.getElementById("text-editor").focus();
  }

  render() {
    return(
      <div>
        <h2>Editor</h2>
        <EditorParagraph />
        <EditorActionFrame />
      </div>
    );
  }
}

export default EditorDisplay;
