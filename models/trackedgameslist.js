const mongoose = require('mongoose');
const { boolean } = require('yargs');
const user = require('./user');
const Schema = mongoose.Schema;

const trackedGamesListSchema = new Schema({
  apiID: String,
  user: {type: Schema.Types.ObjectId},
  sportType: {type: String, enum:['NFL', 'NHL', 'NBA', 'MLB']},
  game: Boolean
}, {
  timestamps: true
});



module.exports = mongoose.model('TrackedGamesList', trackedGamesListSchema);