import { combineReducers } from "redux";

import scenesReducer from "./scenes_reducer";
import appReducer    from "./app_reducer";

const rootReducer = combineReducers({
  scenes: scenesReducer,
  app:    appReducer
});

export default rootReducer;
