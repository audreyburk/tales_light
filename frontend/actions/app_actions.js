export const VIEW_READER = "VIEW_READER";
export const VIEW_EDITOR = "VIEW_EDITOR";
export const FOCUS_SCENE    = "FOCUS_SCENE";

export const viewReader = () => ({
  type: VIEW_READER
});

export const viewEditor = () => ({
  type: VIEW_EDITOR
});

export const focusScene = sceneId => ({
  type: FOCUS_SCENE, sceneId
});
