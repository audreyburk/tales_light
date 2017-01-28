import { merge } from "lodash";

import { RECEIVE_SCENE, RECEIVE_SCENES } from "./../actions/scene_actions";

// testing only
const initialState = {
  "1": {
    id: 1,
    body: "Hallo.",
    ins: [],
    outs: [2]
  },
  "2": {
    id: 2,
    body: "Bya.",
    ins: [1],
    outs: []
  }
};
// ---

const scenesReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SCENE:
      newState = merge(newState, {[action.scene.id]: action.scene});
      return newState;

    case RECEIVE_SCENES:
      newState = {};
      action.scenes.forEach(scene => {
        newState[scene.id] = scene;
      });
      return newState;

    default:
      return state;
  }
};

export default scenesReducer;
