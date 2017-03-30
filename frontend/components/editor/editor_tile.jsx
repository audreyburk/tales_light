import React from "react";

class EditorTile extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus(e) {
    e.preventDefault();
    this.props.focusScene(this.props.scene._id);
  }

  render() {
    return(
      <article className="editor-tile" onClick={e=>this.focus(e)}>
        {this.props.scene.title}
      </article>
    );
  }
}

export default EditorTile;
