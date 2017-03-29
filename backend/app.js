const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const Scenes = require("./scenes.js");

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/scenes", (req, res) => {
  Scenes.all(scenes => {
    res.json(scenes);
  });
});

app.post("/scenes", (req, res) => {
  Scenes.create(req.body.scene, scene => {
    res.json(scene);
  });
});

app.get("/scenes/:id", (req, res) => {
  Scenes.find(req.params.id, scene => {
    res.json(scene);
  });
});

app.delete("/scenes/:id", (req, res) => {
  Scenes.delete(req.params.id, scene => {
    res.json(scene);
  });
});

app.put("/scenes/:id", (req, res) => {
  Scenes.update(req.params.id, req.body.scene, scene => {
    res.json(scene);
  });
});

app.get("/", (req, res) => {
  res.render(__dirname + "/index.pug");
}).listen(3000);
