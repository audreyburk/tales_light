import React from "react";

import EditorParagraph from "./editor_paragraph";

class EditorParagraphFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paragraphs: []};
    this.removeParagraph = this.removeParagraph.bind(this);
  }

  paragraphs() {
    const children = this.state.paragraphs.map((p, i) => {
      return <EditorParagraph removeParagraph={this.removeParagraph}
                              p={p} key={i} i={i}/>;
    });
    return <section>{children}</section>;
  }

  addParagraph(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    newState.paragraphs.push({text:""});
    this.setState(newState);
  }

  editParagraph(e, i) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    newState.paragraphs[i].text = e.target.textContent;
    this.setState(newState);
  }

  removeParagraph(e, i) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    delete newState.paragraphs[i];
    newState.paragraphs = newState.paragraphs.filter(Boolean);
    this.setState(newState);
  }

  render() {
    console.log(this.state.paragraphs);
    return(
      <div>
        <h4>Body</h4>
        {this.paragraphs()}
        <button onClick={(e)=>this.addParagraph(e)}>+ paragraph</button>
      </div>
    );
  }
}

export default EditorParagraphFrame;
