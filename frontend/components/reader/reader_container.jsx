import { connect } from "react-redux";

import { currentScene, sceneById } from "./../../reducers/selectors";
import { focusScene } from './../../actions/scene_actions';
import { viewEditor } from './../../actions/view_actions';

import Reader from "./reader";

const mapStateToProps = state => ({
  currentScene: currentScene(state),
  sceneById:    (id) => sceneById(state, id)
});

const mapDispatchToProps = dispatch => ({
  focusScene: (scene) => dispatch(focusScene(scene)),
  viewEditor: () => dispatch(viewEditor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reader);
