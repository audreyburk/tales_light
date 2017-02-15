import React from "react";

import ReaderFrameContainer from "./reader/reader_frame_container";
import EditorFrameContainer from "./editor/editor_frame_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFrame() {
    if(this.props.currentView === "reader") {
      return <ReaderFrameContainer />;
    } else {
      return <EditorFrameContainer />;
    }
  }

  render() {
    return(
      <main>
        <h1>Tales</h1>
        {this.renderFrame()}
      </main>
    );
  }
}

export default App;
