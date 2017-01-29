import React from "react";

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, id) {
    e.preventDefault();
    console.log(id);
    const scene = this.props.sceneById(id);
    this.props.focusScene(scene);
  }

  bodyContent() {
    // parsing assumes correct input
    // it is checked before saving to db

    const reTag = /(<\d+>)/;
    const reId  = /(<(\d)+>)/;
    const matches = this.props.currentScene.body.split(reTag);

    let counter = 1;
    let children = matches.map((match, i, arr) => {
      if(match.match(reTag)) {
        counter = counter ^ 1;
        if(counter === 0){
          const id = match.match(reId)[2];
          const props = { onClick: (e) => this.handleClick(e, id) };
          return React.createElement("b", props, arr[i+1]);
        } else {
          return null;
        }
      } else {
        return (counter === 0 ? null : match);
      }
    }).filter(Boolean);

    return React.createElement("div", null, ...children);
  }

  render() {
    return(
      <div>
        {this.bodyContent()}
      </div>
    );
  }
}

export default SceneDisplay;
