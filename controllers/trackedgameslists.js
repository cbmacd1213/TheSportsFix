const axios = require('axios')
const TrackedGamesList = require('../models/trackedgameslist');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  let trackedGamesLists = await TrackedGamesList.find({user:req.user._id});
  console.log('user centric',trackedGamesLists);
  res.status(200).json(trackedGamesLists);
}

async function show(req, res) {
  const trackedGamesList = await TrackedGamesList.findById(req.params.id);
  res.status(200).json(trackedGamesList);
}

async function create(req, res) {
    req.body.user = req.user._id
  const trackedGamesList = await TrackedGamesList.create(req.body);
  res.status(201).json(trackedGamesList);
}

async function deleteOne(req, res) {
  const deletedTrackedGamesList = await TrackedGamesList.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedTrackedGamesList);
}

async function update(req, res) {
  const updatedTrackedGamesList = await TrackedGamesList.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedTrackedGamesList);
}