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

Scenes.find = function(id, cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.findOne(
      {_id: ObjectId(id)},
      (errB, scene) => {
        assert.equal(errB, null);
        db.close();
        cb(scene);
      }
    );
  });
};

Scenes.create = function(scene, cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.insertOne(
      scene,
      (errB, newScene) => {
        assert.equal(errB, null);
        db.close();
        console.log(newScene.ops);
        cb(newScene.ops);
      }
    );
  });
};

Scenes.delete = function(id, cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.deleteOne(
      { _id: ObjectId(id)},
      (errB, scene) => {
        assert.equal(errB, null);
        db.close();
        cb(scene);
      }
    );
  });
};

Scenes.update = function(id, scene, cb) {
  MongoClient.connect(url, (errA, db) => {
    assert.equal(errA, null);
    const collection = db.collection("scenes");
    collection.findOneAndUpdate(
      {_id: ObjectId(id)},
      {$set: {body: scene.body, title: scene.title} },
      {returnOriginal: false},
      (errB, newScene) => {
        assert.equal(errB, null);
        db.close();
        cb(newScene.value);
      }
    );
  });
};

module.exports = Scenes;
