import React from "react";
import EditorScene from "./editor_scene";
import EditorSidebar from "./editor_sidebar";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEditorScene() {
    return this.props.appScene ?
      (<EditorScene scene={this.props.appScene}
        receiveEdit={this.props.receiveEdit}
        updateScene={this.props.updateScene}
        deleteScene={this.props.deleteScene}
        createScene={this.props.createScene}
        focusScene={this.props.focusScene}
        viewReader={this.props.viewReader}  />) :
        <section className="editor-scene"></section>;
  }

  render() {
    return(
      <section className="editor">
        <EditorSidebar allScenes={this.props.allScenes}
           focusScene={this.props.focusScene}
           createScene={this.props.createScene} />

         {this.renderEditorScene()}
       </section>
    );
  }
}

export default Editor;
