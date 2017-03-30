import React from "react";

class EditorScene extends React.Component {
  constructor(props) {
    super(props);
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
        <label>Title:
          <input onChange={e => this.change("title", e)}
            value={this.props.scene.title} />
        </label>
        <label>Body:
          <textarea onChange={e => this.change("body", e)}
            value={this.props.scene.body} />
        </label>
        <button onClick={e => this.handleSave(e)}>Save</button>
        <button onClick={e => this.handleDelete(e)}>Delete</button>
      </section>
    );
  }
}

export default EditorScene;
