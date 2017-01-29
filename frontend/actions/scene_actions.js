export const RECEIVE_SCENES = "RECEIVE_SCENES";
export const RECEIVE_SCENE  = "RECEIVE_SCENE";
export const FOCUS_SCENE  = "FOCUS_SCENE";

export const receiveScenes = scenes => ({
  type: RECEIVE_SCENES,
  scenes: scenes
});

export const receiveScene = scene => ({
  type: RECEIVE_SCENE,
  scene: scene
});

export const focusScene = scene => ({
  type: FOCUS_SCENE,
  scene: scene
});
