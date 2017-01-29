import React from "react";

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    const scene = this.props.sceneById("2");
    this.props.focusScene(scene);
  }

  render() {
    return(
      <div>
        {this.props.currentScene.body}
        <button onClick={(e) => this.handleClick(e)}>Next</button>
      </div>
    );
  }
}

export default SceneDisplay;
