import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: this.props.currentScene.body};
  }

  handleSave(e) {
    e.preventDefault();
    // upload
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
