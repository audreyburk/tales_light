import fetch from 'isomorphic-fetch';

export const RECEIVE_SCENES = "RECEIVE_SCENES";
export const RECEIVE_SCENE  = "RECEIVE_SCENE";
export const REQUEST_SCENES = "REQUEST_SCENES";
export const REQUEST_SCENE  = "REQUEST_SCENE";
export const REMOVE_SCENE   = "REMOVE_SCENE";
// export const UPDATE_SCENE   = "UPDATE_SCENE";

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

export const fetchScenes = () => {
  return (dispatch) => {
    dispatch(requestScenes());
    return fetch("/scenes")
      .then(response => response.json())
      .then(scenes => {
        dispatch(receiveScenes(scenes));
      });
      // add network error handling
  };
};

export const deleteScene = scene => {
  return (dispatch) => {
    dispatch(requestScene()); // probably change to a "saving scene" action
    const url = `/scenes/${scene._id}`;
    const request = new Request(url, {
    	method: "DELETE"
    });
    return fetch(request)
      .then(() => {
        dispatch(removeScene(scene));
      });
  };
};

export const createScene = scene => {
  return (dispatch) => {
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
        dispatch(removeScene(scene));
        dispatch(receiveScene(ops[0]));
      });
  };
};

export const updateScene = scene => {
  return (dispatch) => {
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
};
