import { merge } from "lodash";

import { FOCUS_SCENE } from "./../actions/scene_actions";

// testing only
const body = "I wake up with the sudden realization that nothing is normal.\
I sit up, yawn, rub the sleep from my eyes. Everything looks as it always\
has, but for a moment, I cannot remember who I am. Am I a\
<2>photographer<2>? A <3>botanist<3>? God help me, <4>maybe a boxer<4>?";

const initialState = {
  id: 1,
  body: body
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
