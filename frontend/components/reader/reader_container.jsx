import { connect } from "react-redux";

import { currentScene, sceneByTitle } from "./../../reducers/selectors";
import { focusScene } from './../../actions/scene_actions';
import { viewEditor } from './../../actions/view_actions';

import Reader from "./reader";

const mapStateToProps = state => ({
  currentScene: currentScene(state),
  sceneByTitle: title => sceneByTitle(state, title)
});

const mapDispatchToProps = dispatch => ({
  focusScene: scene => dispatch(focusScene(scene)),
  viewEditor: () => dispatch(viewEditor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reader);
