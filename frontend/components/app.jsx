import React from "react";

import ReaderContainer from "./reader/reader_container";
import EditorContainer from "./editor/editor_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchScenes();
  }

  renderFrame() {
    if(this.props.appView === "reader") {
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
