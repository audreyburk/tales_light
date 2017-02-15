import { VIEW_READER, VIEW_EDITOR } from "./../actions/view_actions";

// testing only
const initialState = {
  view: "reader"
};
// ---

const currentViewReducer = (state = initialState, action) => {
  switch(action.type) {
    case VIEW_READER:
      return {view: "reader"};

    case VIEW_EDITOR:
      return {view: "editor"};

    default:
      return state;
  }
};

export default currentViewReducer;
