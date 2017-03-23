import { connect } from "react-redux";

import { currentScene } from "./../../reducers/selectors";
import { focusScene }   from './../../actions/scene_actions';

import Editor from "./editor";

const mapStateToProps = state => ({
  currentScene: currentScene(state)
});

const mapDispatchToProps = dispatch => ({
  focusScene: (scene) => dispatch(focusScene(scene)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
