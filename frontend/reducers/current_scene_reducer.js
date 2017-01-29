import { merge } from "lodash";

import { FOCUS_SCENE } from "./../actions/scene_actions";

// testing only
const initialState = {
  id: 1,
  body: "Hallo. Whaaa?"
};
// ---

const currentSceneReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOCUS_SCENE:
    let newState = merge({}, state);
      return merge(newState, action.scene);

    default:
      return state;
  }
};

export default currentSceneReducer;
