import React from "react";

import parseSceneReader from "./../../utils/parse_scene_reader";

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLink(e, id) {
    e.preventDefault();
    const scene = this.props.sceneById(id);
    this.props.focusScene(scene);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.viewEditor();
  }

  render() {
    return(
      <section>
        {parseSceneReader(
          this.props.currentScene.body,
          this.handleLink.bind(this)
        )}
        <button onClick={e => this.handleEdit(e)}>Edit Scene</button>
      </section>

    );


  }
}

export default SceneDisplay;
