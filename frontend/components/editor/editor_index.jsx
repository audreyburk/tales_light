import React from "react";
import EditorTile from "./editor_tile";

class EditorIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderScenes() {
    return this.props.allScenes.map(scene => {
      return(<EditorTile scene={scene} key={scene._id}
                focusScene={this.props.focusScene} />);
    });
  }

  render() {
    return(
      <section className="editor-index">
        {this.renderScenes()}
      </section>
    );
  }
}

export default EditorIndex;
