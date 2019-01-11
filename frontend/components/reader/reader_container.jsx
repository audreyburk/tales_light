import { connect } from "react-redux";

import { appScene, sceneByTitle } from "./../../reducers/selectors";
import { viewEditor, focusScene } from "./../../actions/app_actions";

import Reader from "./reader";

const mapStateToProps = state => ({
  appScene:     appScene(state),
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
