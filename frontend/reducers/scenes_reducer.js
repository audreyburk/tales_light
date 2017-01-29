import { merge } from "lodash";

import {
  RECEIVE_SCENES,
  RECEIVE_SCENE } from "./../actions/scene_actions";

// testing only
const initialState = {
  "1": {
    id: 1,
    body: "<4>End.<4> Hallo."
  },
  "2": {
    id: 2,
    body: "Twice. <1>Begin.<1>"
  },
  "3": {
    id: 3,
    body: "Thrice."
  },
  "4": {
    id: 4,
    body: "Quat. <1>Begin.<1>"
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
