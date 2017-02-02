import React from "react";

import parseSceneReader from "./../../utils/parse_scene_reader";

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, id) {
    e.preventDefault();
    const scene = this.props.sceneById(id);
    this.props.focusScene(scene);
  }

  render() {
    return parseSceneReader(
      this.props.currentScene.body,
      this.handleClick.bind(this)
    );
  }
}

export default SceneDisplay;
