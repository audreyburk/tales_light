import React from "react";

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, id) {
    e.preventDefault();
    const scene = this.props.sceneById(id);
    this.props.focusScene(scene);
  }

  parse(input = this.props.currentScene.body) {
    const ce = React.createElement;
    const children = input.map(chunk => {
      switch(chunk.type){
        case "break":
          return ce("br");

        case "text":
          return chunk.text;

        case "link":
          const props = { onClick: (e) => this.handleClick(e, chunk.linkTo) };
          return ce("b", props, chunk.text);

        default:
          throw("Bad scene data");
      }
    });

    // dont want div if recursing...
    return React.createElement("div", null, ...children);
  }

  render() {
    return(
      <div>
        {this.parse()}
      </div>
    );
  }
}

export default SceneDisplay;
