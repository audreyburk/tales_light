import { connect } from "react-redux";
import { currentView } from "./../reducers/selectors";
import { fetchScenes } from "./../actions/scene_actions";
import App from "./app";

const mapStateToProps = state => ({
  currentView: currentView(state)
});

const mapDispatchToProps = dispatch => ({
  fetchScenes: () => dispatch(fetchScenes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
