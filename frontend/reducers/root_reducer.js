import { combineReducers } from "redux";

import scenesReducer from "./scenes_reducer";
import currentSceneReducer from "./current_scene_reducer";

const rootReducer = combineReducers({
  scenes: scenesReducer,
  currentScene: currentSceneReducer
});

export default rootReducer;
