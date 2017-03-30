export const allScenes = state => {
  const scenes = Object.keys(state.scenes).map(key => {
    return state.scenes[key];
  });
  return scenes;
};

export const sceneById = (state, id) => {
  return state.scenes[id];
};

export const sceneByTitle = (state, title) => {
  let result = null;
  Object.values(state.scenes).forEach(scene => {
    if(scene.title === title) result = scene;
  });
  return result;
};

export const appScene = state => {
  return state.scenes[state.app.sceneId];
};

export const appView = state => {
  return state.app.view;
};
