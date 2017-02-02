import React from "react";

import ReaderFrameContainer from "./reader/reader_frame_container";
import EditorFrameContainer from "./editor/editor_frame_container";

class App extends React.Component {
  render() {
    return(
      <main>
        <h1>Tales</h1>
        <ReaderFrameContainer />
        <EditorFrameContainer />
      </main>
    );
  }
}

export default App;
