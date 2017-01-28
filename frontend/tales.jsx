import React from "react";
import ReactDOM from "react-dom";

// testing only ---
import store from "./store/store";
window.store = store;

import { receiveScene, receiveScenes } from "./actions/scene_actions";
window.receiveScene  = receiveScene;
window.receiveScenes = receiveScenes;
// ---



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<h1>Tales</h1>, root);
});
