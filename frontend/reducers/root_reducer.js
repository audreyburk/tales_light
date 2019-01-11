import { combineReducers } from "redux";

import scenesReducer from "./scenes_reducer";
import editsReducer  from "./edits_reducer";
import appReducer    from "./app_reducer";

const rootReducer = combineReducers({
  scenes: scenesReducer,
  edits:  editsReducer,
  app:    appReducer
});

export default rootReducer;
