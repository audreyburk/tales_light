import React from "react";

class EditorScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.scene;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.scene);
  }

  handleSave(e) {
    e.preventDefault();
    const newScene = this.state;
    if(newScene.new) {
      delete newScene.new;
      this.props.createScene(newScene);
    } else {
      this.props.updateScene(newScene);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteScene(this.props.scene);
  }

  change(property, e) {
    e.preventDefault();
    // this.setState({[property]: e.currentTarget.value});
    const edit = Object.assign({}, this.props.scene,
      {[property]: e.currentTarget.value});
    this.props.receiveEdit(edit);
  }

  render() {
    return(
      <section className="editor-scene">
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
      </section>
    );
  }
}

export default EditorScene;
