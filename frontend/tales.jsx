import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";


// testing only ---
import store from "./store/store";
window.store = store;

import { receiveScene, receiveScenes } from "./actions/scene_actions";
window.receiveScene  = receiveScene;
window.receiveScenes = receiveScenes;

import { allScenes } from "./reducers/selectors";
window.allScenes = () => allScenes(store.getState());
// ---


document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("content");
  ReactDOM.render(<Root store={store} />, rootElement);
});
