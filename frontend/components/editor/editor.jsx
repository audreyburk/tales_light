import React from "react";
import EditorScene from "./editor_scene";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  blankScene(e) {
    e.preventDefault();
    this.props.receiveScene({
      title:  "untitled",
      body:   "...",
      new:    true
    });
    this.blanks++;
  }

  renderScenes() {
    return this.props.allScenes.map(scene => {
      return(<EditorScene scene={scene} key={scene._id}
                updateScene={this.props.updateScene}
                deleteScene={this.props.deleteScene}
                createScene={this.props.createScene} />);
    });
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        {this.renderScenes()}
        <button onClick={e => this.blankScene(e)}>New Scene</button>
      </section>
    );
  }
}

export default Editor;
