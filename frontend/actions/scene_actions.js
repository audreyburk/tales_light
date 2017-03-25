import fetch from 'isomorphic-fetch';

export const RECEIVE_SCENES = "RECEIVE_SCENES";
export const RECEIVE_SCENE  = "RECEIVE_SCENE";
export const FOCUS_SCENE    = "FOCUS_SCENE";
export const REQUEST_SCENES = "REQUEST_SCENES";

export const receiveScenes = scenes => ({
  type: RECEIVE_SCENES, scenes
});

export const receiveScene = scene => ({
  type: RECEIVE_SCENE, scene
});

export const focusScene = scene => ({
  type: FOCUS_SCENE, scene
});

export const requestScenes = () => ({
  type: REQUEST_SCENES
});

export const fetchScenes = () => {
  return (dispatch) => {
    dispatch(requestScenes());
    return fetch("/scenes")
      .then(response => response.json())
      .then(scenes => {
        dispatch(receiveScenes(scenes));
      });

      // In a real world app, you also want to
      // catch any error in the network call.
  };
};
