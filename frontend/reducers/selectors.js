export const allScenes = state => {
  const scenes = Object.keys(state.scenes).map(key => {
    return state.scenes[key];
  });
  return scenes;
};

export const sceneById = (state, id) => {
  return state.scenes[id];
};

export const currentScene = state => {
  return state.currentScene;
};
