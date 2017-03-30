import React from "react";
import EditorScene from "./editor_scene";
import EditorIndex from "./editor_index";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  blankScene(e) {
    e.preventDefault();
    this.props.focusScene({
      title:  "untitled",
      body:   "...",
      new:    true
    });
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        <EditorIndex allScenes={this.props.allScenes}
           focusScene={this.props.focusScene} />

         <EditorScene scene={this.props.appScene}
           updateScene={this.props.updateScene}
           deleteScene={this.props.deleteScene}
           createScene={this.props.createScene} />

        <button onClick={e => this.blankScene(e)}>New Scene</button>
      </section>
    );
  }
}

export default Editor;
