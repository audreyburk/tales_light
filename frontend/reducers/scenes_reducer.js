import { merge } from "lodash";

import {
  RECEIVE_SCENES,
  RECEIVE_SCENE,
  REQUEST_SCENES } from "./../actions/scene_actions";

const scenesReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case REQUEST_SCENES:
      return newState;

    case RECEIVE_SCENE:
      newState = merge(newState, {[action.scene.id]: action.scene});
      return newState;

    case RECEIVE_SCENES:
      newState = {};
      action.scenes.forEach(scene => {
        newState[scene.title] = scene;
      });
      return newState;

    default:
      return state;
  }
};

export default scenesReducer;
