import { connect } from "react-redux";
import { currentView } from "./../reducers/selectors";
import App from "./app";

const mapStateToProps = state => ({
  currentView: currentView(state)
});

export default connect(
  mapStateToProps,
  null
)(App);
