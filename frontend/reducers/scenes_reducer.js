import { merge } from "lodash";

import {
  RECEIVE_SCENES,
  RECEIVE_SCENE } from "./../actions/scene_actions";

// testing only
const initialState = {
  "1": {
    id: 1,
    body: [
      [
        {
          type: "text",
          text: "Hallo."
        }
      ]
    ]
  }
};
// ---

const scenesReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
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
