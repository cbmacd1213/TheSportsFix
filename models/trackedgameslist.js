const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const trackedGamesListSchema = new Schema({
  gameID: String,
  trackedBy:[{type: Schema.Types.ObjectId}],
  sportType: {type: String, enum:['NFL', 'NHL', 'NBA', 'MLB']},
}, {
  timestamps: true
});



module.exports = mongoose.model('TrackedGamesList', trackedGamesListSchema);