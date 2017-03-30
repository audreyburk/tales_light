import { merge } from "lodash";

import { RECEIVE_EDIT, REMOVE_EDIT } from "./../actions/edit_actions";

const editsReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case REMOVE_EDIT:
      delete newState[action.edit._id];
      return newState;

    case RECEIVE_EDIT:
      newState = merge(newState, {[action.edit._id]: action.edit});
      return newState;

    default:
      return state;
  }
};

export default editsReducer;
