const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
const assert = require("assert");
const url = "mongodb://localhost:27017/tales_light";

const Scenes = function() {};

Scenes.all = function (cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.find({}).toArray((errB, scenes) => {
      assert.equal(errB, null);
      db.close();
      cb(scenes);
    });
  });
};

Scenes.findByTitle = function(title, cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.findOne({title: title}, (errB, scene) => {
      assert.equal(errB, null);
      db.close();
      cb(scene);
    });
  });
};

Scenes.update = function(title, scene, cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.updateOne({title: title}, { $set: { body: scene.body } }, (errB, newScene) => {
      assert.equal(errB, null);
      db.close();
      cb(newScene);
    });
  });
};

module.exports = Scenes;
