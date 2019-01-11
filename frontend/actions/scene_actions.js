import fetch from 'isomorphic-fetch';

export const RECEIVE_SCENES = "RECEIVE_SCENES";
export const RECEIVE_SCENE  = "RECEIVE_SCENE";
export const REQUEST_SCENES = "REQUEST_SCENES";
export const REQUEST_SCENE  = "REQUEST_SCENE";
export const REMOVE_SCENE   = "REMOVE_SCENE";

export const receiveScenes = scenes => ({
  type: RECEIVE_SCENES, scenes
});

export const receiveScene = scene => ({
  type: RECEIVE_SCENE, scene
});

export const requestScenes = () => ({
  type: REQUEST_SCENES
});

export const requestScene = () => ({
  type: REQUEST_SCENE
});

export const removeScene = scene => ({
  type: REMOVE_SCENE, scene
});

export const fetchScenes = () => dispatch => {
  dispatch(requestScenes());
  return fetch("/scenes")
    .then(response => response.json())
    .then(scenes => {
      dispatch(receiveScenes(scenes));
    });
};

export const deleteScene = scene => dispatch => {
  dispatch(requestScene());
  const url = `/scenes/${scene._id}`;
  const request = new Request(url, {
  	method: "DELETE"
  });
  return fetch(request)
    .then( () => dispatch(removeScene(scene)) );
};

export const createScene = scene => dispatch => {
  dispatch(requestScene()); // probably change to a "saving scene" action
  const url = "/scenes";
  const request = new Request(url, {
  	method: "POST",
    body: JSON.stringify({ scene: scene }),
  	headers: new Headers({
      "Accept": "application/json",
  		"Content-Type": "application/json"
  	})
  });
  return fetch(request)
    .then(response => response.json())
    .then(ops => {
      const newScene = ops[0];
      dispatch(receiveScene(newScene));
      return newScene;
    });
};

export const updateScene = scene => dispatch => {
  dispatch(requestScene()); // probably change to a "saving scene" action
  const url = `/scenes/${scene._id}`;
  const request = new Request(url, {
  	method: "PUT",
    body: JSON.stringify({ scene: scene }),
  	headers: new Headers({
      "Accept": "application/json",
  		"Content-Type": "application/json"
  	})
  });
  return fetch(request)
    .then(response => response.json())
    .then(newScene => {
      dispatch(receiveScene(newScene));
    });
};
