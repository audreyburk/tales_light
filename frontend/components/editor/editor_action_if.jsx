import React from "react";

class EditorActionIf extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    e.preventDefault();
    const action = {linkTo: e.target.value};
    this.props.editAction(this.props.idx, action);
  }

  render() {
    return(
      <div>
      </div>
    );
  }
}

export default EditorActionIf;
