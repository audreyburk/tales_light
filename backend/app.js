const express = require("express");

const app = express();
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render(__dirname + "/index.pug");
}).listen(3000);
