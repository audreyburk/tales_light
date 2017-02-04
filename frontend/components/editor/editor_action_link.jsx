import React from "react";

class EditorActionLink extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    e.preventDefault();
    const action = {linkTo: e.target.value};
    this.props.editAction(this.props.i, action);
  }

  render() {
    return(
      <div>
        <input onChange={(e) => this.handleChange(e)}
               value={this.props.linkTo}
               type="text"></input>
      </div>
    );
  }
}

export default EditorActionLink;
