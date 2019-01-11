import React from "react";
import EditorIndex from "./editor_index";

class EditorSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  newScene(e) {
    e.preventDefault();
    this.props.createScene({title: "title__", body: "body__"})
      .then(scene => this.props.focusScene(scene._id));
  }

  render() {
    return(
      <aside className="editor-sidebar">
        <input placeholder="search"></input>
        <EditorIndex allScenes={this.props.allScenes}
          focusScene={this.props.focusScene} />
        <ul className="editor-sidebar-buttons">
          <li className="icon new-icon"
            title="New Scene"
            onClick={e => this.newScene(e)}></li>
        </ul>
      </aside>
    );
  }
}

export default EditorSidebar;
