import React from "react";

class EditorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSave(e) {
    e.preventDefault();
    // upload
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        <textarea></textarea>
        <button onClick={(e) => this.handleSave(e)}>Save</button>
      </section>
    );
  }
}

export default EditorDisplay;
