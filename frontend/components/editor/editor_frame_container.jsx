import { connect } from "react-redux";

import { currentScene } from "./../../reducers/selectors";
import { focusScene }   from './../../actions/scene_actions';

import EditorFrame from "./editor_frame";

const mapStateToProps = state => ({
  currentScene: currentScene(state)
});

const mapDispatchToProps = dispatch => ({
  focusScene: (scene) => dispatch(focusScene(scene)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorFrame);
