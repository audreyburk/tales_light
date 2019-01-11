import { VIEW_READER, VIEW_EDITOR, FOCUS_SCENE
} from "./../actions/app_actions";

// testing only
const initialState = {
  view:    "reader",
  sceneId: "58d6d525d9380c99e8eb51c8"
};
// ---

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case VIEW_READER:
      return Object.assign({}, state, {view: "reader"});

    case VIEW_EDITOR:
      return Object.assign({}, state, {view: "editor"});

    case FOCUS_SCENE:
      return Object.assign({}, state, {sceneId: action.sceneId});

    default:
      return state;
  }
};

export default appReducer;
