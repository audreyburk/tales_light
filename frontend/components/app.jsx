import React from "react";

import SceneReaderContainer from "./scenes/scene_reader_container";

class App extends React.Component {
  render() {
    return(
      <main>
        <h1>Tales</h1>
        <SceneReaderContainer />
      </main>
    );
  }
}

export default App;
