import { combineReducers } from "redux";

import scenesReducer       from "./scenes_reducer";
import currentSceneReducer from "./current_scene_reducer";
import currentViewReducer  from "./current_view_reducer";

const rootReducer = combineReducers({
  scenes:       scenesReducer,
  currentScene: currentSceneReducer,
  currentView:  currentViewReducer
});

export default rootReducer;
