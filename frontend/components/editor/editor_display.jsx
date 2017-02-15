import React from "react";

import EditorActionFrame from "./editor_action_frame";
import EditorTextBox     from "./editor_text_box";

import constructScene    from './../../utils/construct_scene';


class EditorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        <EditorTextBox />
        <EditorActionFrame />
      </section>
    );
  }
}

export default EditorDisplay;
