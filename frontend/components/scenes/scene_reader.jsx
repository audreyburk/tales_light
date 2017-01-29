import React from "react";

import SceneDisplay from "./scene_display";

class SceneReader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SceneDisplay currentScene={this.props.currentScene}
                      sceneById={this.props.sceneById}
                      focusScene={this.props.focusScene} />
      </div>
    );
  }
}

export default SceneReader;
