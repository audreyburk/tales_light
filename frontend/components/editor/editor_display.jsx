import React from "react";

import EditorActionFrame from "./editor_action_frame";
import EditorTextBox     from "./editor_text_box";

import constructScene    from "./../../utils/construct_scene";
import parseSceneEditorReact  from "./../../utils/parse_scene_editor_react";


class EditorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.addListener   = this.addListener.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.parseScene();
  }

  handleKeyDown(e) {
    // also, prevent enter while inside span? keyCode 13
    if(this.div.children.length === 1 &&
       this.div.children[0].textContent === "") {
        if(e.keyCode === 8 || e.keyCode === 46) {
          e.preventDefault();
          e.stopPropagation();
      }
    }
  }

  addListener(div) {
    if(div) {
      this.div = div;
      div.addEventListener("keydown", this.handleKeyDown);
    }
  }

  handleConstruct(e) {
    e.preventDefault();
    constructScene(this.div);
  }

  parseScene() {
    this.paragraphs = <p data-editor-content="true" data-type="paragraph"></p>;
    this.actions = [];
    if(this.props.currentScene) {
      const parsed = parseSceneEditorReact(this.props.currentScene);
      this.paragraphs = parsed.paragraphs;
      this.actions = parsed.actions;
    }
  }

  render() {
    return(
      <section>
        <h2>Editor</h2>
        <EditorTextBox
          addListener={this.addListener}
          paragraphs={this.paragraphs} />
        <EditorActionFrame actions={this.actions} />
        <button onClick={(e) => this.handleConstruct(e)}>Construct</button>
      </section>
    );
  }
}

export default EditorDisplay;
