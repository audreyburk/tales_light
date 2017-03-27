import React from "react";

class EditorScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body:  this.props.scene.body,
      title: this.props.scene.title
    };
    // add title
    // remove scene when title changes
  }

  handleSave(e) {
    e.preventDefault();
    const newScene = Object.assign({}, this.props.scene, this.state);
    if(this.props.scene._id) {
      this.props.updateScene(newScene);
    } else {
      this.props.createScene(newScene);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteScene(this.props.scene);
  }

  change(property, e) {
    this.setState({[property]: e.currentTarget.value});
  }

  render() {
    return(
      <article className="editor-scene">
        <label>Title:
          <input onChange={e => this.change("title", e)}
            value={this.state.title} />
        </label>
        <label>Body:
          <textarea onChange={e => this.change("body", e)}
            value={this.state.body} />
        </label>
        <button onClick={e => this.handleSave(e)}>Save</button>
        <button onClick={e => this.handleDelete(e)}>Delete</button>
      </article>
    );
  }
}

export default EditorScene;
