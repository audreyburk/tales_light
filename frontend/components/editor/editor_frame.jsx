import React from "react";

import EditorDisplay from "./editor_display";

class EditorFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <EditorDisplay currentScene={this.props.currentScene} />
    );
  }
}

export default EditorFrame;
