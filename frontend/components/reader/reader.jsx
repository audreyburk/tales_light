import React from "react";

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(e, title) {
    e.preventDefault();
    const id = this.props.sceneByTitle(title)._id;
    this.props.focusScene(id);
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
      <section className="reader">
        <ul className="reader-buttons">
          <li className="icon edit-icon"
            title="Edit Scene"
            onClick={e => this.handleEdit(e)}></li>
        </ul>
        <article className="reader-body">
          {this.props.appScene ? this.parse(this.props.appScene.body) : ""}
        </article>
      </section>
    );
  }
}

export default Reader;
