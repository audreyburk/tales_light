import React from "react";

import ReaderContainer from "./reader/reader_container";
import EditorContainer from "./editor/editor_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFrame() {
    if(this.props.currentView === "reader") {
      return <ReaderContainer />;
    } else {
      return <EditorContainer />;
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
