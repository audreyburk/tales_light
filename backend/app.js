const express = require("express");
const app = express();

const Scenes = require("./scenes.js");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/scenes", (req, res) => {
  Scenes.all( scenes => {
    res.json(scenes);
  });
});

app.get("/scenes/:title", (req, res) => {
  Scenes.findByTitle(req.params.title, scene => {
    res.json(scene);
  });
});

app.get("/", (req, res) => {
  res.render(__dirname + "/index.pug");
}).listen(3000);
