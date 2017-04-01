import React from "react";

class EditorScene extends React.Component {
  constructor(props) {
    super(props);
  }

  viewReader(e) {
    e.preventDefault();
    this.props.viewReader();
  }

  handleSave(e) {
    e.preventDefault();
    this.props.updateScene(this.props.scene);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteScene(this.props.scene)
      .then(() => this.props.focusScene(null));
  }

  change(property, e) {
    e.preventDefault();
    const edit = Object.assign({}, this.props.scene,
      {[property]: e.currentTarget.value});
    this.props.receiveEdit(edit);
  }

  render() {
    return(
      <section className="editor-scene">
        <input className="editor-title"
          onChange={e => this.change("title", e)}
          value={this.props.scene.title} />
        <textarea className="editor-text"
          onChange={e => this.change("body", e)}
          value={this.props.scene.body} />
        <ul className="editor-scene-buttons">
          <li className="icon lights-on-icon"
            title="Save"
            onClick={e => this.handleSave(e)}></li>
          <li className="icon lights-off-icon"
            title="Delete"
            onClick={e => this.handleDelete(e)}></li>
          <li className="icon view-icon"
            title="View"
            onClick={e => this.viewReader(e)}></li>
        </ul>
      </section>
    );
  }
}

export default EditorScene;
