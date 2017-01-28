export const allScenes = state => {
  const scenes = Object.keys(state.scenes).map(key => {
    return state.scenes[key];
  });
  return scenes;
};
