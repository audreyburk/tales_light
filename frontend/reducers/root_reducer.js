import { combineReducers } from "redux";

import scenesReducer from "./scenes_reducer";

const rootReducer = combineReducers({
  scenes: scenesReducer
});

export default rootReducer;
