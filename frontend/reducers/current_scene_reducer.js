import { FOCUS_SCENE } from "./../actions/scene_actions";

// testing only
const initialState = {
  title: "Intro",
  body: "(client text) Am I a [[boxer|Boxer]]? Perhaps a [[musician|Musician]]?"
};
// ---

const currentSceneReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOCUS_SCENE:
      let newState = Object.assign({}, state);
      return Object.assign(newState, action.scene);

    default:
      return state;
  }
};

export default currentSceneReducer;
