export const RECEIVE_SCENES = "RECEIVE_SCENES";
export const RECEIVE_SCENE  = "RECEIVE_SCENE";

export const receiveScenes = scenes => ({
  type: RECEIVE_SCENE,
  scenes: scenes
});

export const receiveScene = scene => ({
  type: RECEIVE_SCENE,
  scene: scene
});
