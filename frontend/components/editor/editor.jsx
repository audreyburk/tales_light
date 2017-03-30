import React from "react";
import EditorScene from "./editor_scene";
import EditorIndex from "./editor_index";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  blankScene(e) {
    e.preventDefault();
    this.props.createScene({title: "...", body: "..."})
      .then(scene => this.props.focusScene(scene._id));
  }

  renderEditorScene() {
    return this.props.appScene ?
      (<EditorScene scene={this.props.appScene}
        receiveEdit={this.props.receiveEdit}
        updateScene={this.props.updateScene}
        deleteScene={this.props.deleteScene}
        createScene={this.props.createScene}
        focusScene={this.props.focusScene} />) : "";
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        <EditorIndex allScenes={this.props.allScenes}
           focusScene={this.props.focusScene} />

         {this.renderEditorScene()}
        <button onClick={e => this.blankScene(e)}>New Scene</button>
      </section>
    );
  }
}

export default Editor;
