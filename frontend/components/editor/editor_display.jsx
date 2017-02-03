import React from "react";

import EditorActionFrame    from "./editor_action_frame";
import EditorParagraphFrame from "./editor_paragraph_frame";

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
        <EditorParagraphFrame />
        <EditorActionFrame />
      </div>
    );
  }
}

export default EditorDisplay;
