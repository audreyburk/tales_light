import { FOCUS_SCENE } from "./../actions/scene_actions";

// testing only
const body = [
  {
    type: "text",
    text: "I wake up with the sudden realization that nothing is normal."
  },
  {
    type: "break"
  },
  {
    type: "text",
    text: "I sit up, yawn, rub the sleep from my eyes. Everything looks as it\
    always has, but for a moment, I cannot remember who I am. Am I a "
  },
  {
    type: "link",
    linkTo: 1,
    text: "photographer"
  },
  {
    type: "text",
    text: "? A "
  },
  {
    type: "link",
    linkTo: 1,
    text: "botanist"
  },
  {
    type: "text",
    text: "? God help me, "
  },
  {
    type: "link",
    linkTo: 1,
    text: "maybe a boxer"
  },
  {
    type: "text",
    text: "?"
  }
];

const initialState = {
  id: 1,
  body: body
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
