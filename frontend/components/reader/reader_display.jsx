import React from "react";

class SceneDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(e, id) {
    e.preventDefault();
    const scene = this.props.sceneById(id);
    this.props.focusScene(scene);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.viewEditor();
  }

  parse(body) {
     const regex = /\[\[([^\]{2}\|]+)(?:\|([^\]{2}]+))?\]\]/g;
     let items = body.split(regex);

     const result = [items[0]];
     for(let i = 1; i < items.length; i += 3) {
       const title = items[i + 1] || items[i];
       const link = null;
       const click = (e) => this.handleLink(e, title); // link
       const text = items[i];
       const span = <span className="link"
                          onClick={click}
                          key={i}>{text}</span>;
       result.push(span);
       result.push(items[i+2]);
     }
     return result;
  }

  render() {
    return(
      <section>
        {this.parse(this.props.currentScene.body)}
        <button onClick={e => this.handleEdit(e)}>Edit Scene</button>
      </section>

    );


  }
}

export default SceneDisplay;
