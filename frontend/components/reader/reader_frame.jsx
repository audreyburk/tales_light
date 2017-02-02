import React from "react";

import ReaderDispay from "./reader_display";

class ReaderFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ReaderDispay currentScene={this.props.currentScene}
                      sceneById={this.props.sceneById}
                      focusScene={this.props.focusScene} />
      </div>
    );
  }
}

export default ReaderFrame;
