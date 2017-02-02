import { connect } from "react-redux";

import { currentScene, sceneById } from "./../../reducers/selectors";
import { focusScene } from './../../actions/scene_actions';

import ReaderFrame from "./reader_frame";

const mapStateToProps = state => ({
  currentScene: currentScene(state),
  sceneById:    (id) => sceneById(state, id)
});

const mapDispatchToProps = dispatch => ({
  focusScene: (scene) => dispatch(focusScene(scene)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReaderFrame);
