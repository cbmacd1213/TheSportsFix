const TrackedGamesList = require('../models/trackedgameslist');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const trackedGamesLists = await TrackedGamesList.find({});
  console.log(trackedGamesLists);
  res.status(200).json({trackedGamesLists});
}

async function show(req, res) {
  const trackedGamesList = await TrackedGamesList.findById(req.params.id);
  res.status(200).json(trackedGamesList);
}

async function create(req, res) {
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