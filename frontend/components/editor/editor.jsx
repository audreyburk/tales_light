import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: this.props.currentScene.body};
    // add title
    // remove scene when title changes
  }

  handleSave(e) {
    e.preventDefault();
    const newScene = Object.assign(this.props.currentScene, this.state);
    this.props.updateScene(newScene);
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        <textarea onChange={e => this.updateBody(e)} value={this.state.body}/>
        <button onClick={e => this.handleSave(e)}>Save</button>
      </section>
    );
  }
}

export default Editor;
