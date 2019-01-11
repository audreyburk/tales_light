import { connect } from "react-redux";
import { appView } from "./../reducers/selectors";
import { fetchScenes } from "./../actions/scene_actions";
import App from "./app";

const mapStateToProps = state => ({
  appView: appView(state)
});

const mapDispatchToProps = dispatch => ({
  fetchScenes: () => dispatch(fetchScenes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
