var mongoose = require('mongoose');

var pollSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  votes: {
    type: [Number],
    default: []
  },
  userVotes: {
    type: [String],
    default: []
  },
  ipVotes: {
    type: [String],
    default: []
  }
})

mongoose.model('Poll', pollSchema);
