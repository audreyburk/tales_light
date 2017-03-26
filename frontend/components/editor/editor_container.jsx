import { connect } from "react-redux";

import { currentScene } from "./../../reducers/selectors";
import { focusScene, updateScene }   from './../../actions/scene_actions';

import Editor from "./editor";

const mapStateToProps = state => ({
  currentScene: currentScene(state)
});

const mapDispatchToProps = dispatch => ({
  focusScene: scene => dispatch(focusScene(scene)),
  updateScene: scene => dispatch(updateScene(scene))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
