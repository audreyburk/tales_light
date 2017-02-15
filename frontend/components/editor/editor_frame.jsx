import React from "react";

import EditorDisplay from "./editor_display";

class EditorFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <EditorDisplay currentScene={this.props.currentScene} />
      </div>
    );
  }
}

export default EditorFrame;
