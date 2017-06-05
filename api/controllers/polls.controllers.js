var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports.pollsGetAll = function(req, res) {
  Poll.find({}, function(err, polls) {
    if (err) throw err;
    res.json(polls)
  });
}

module.exports.pollsAddOne = function(req, res) {
  req.body.votes = Array(req.body.options.length).fill(0)
  var newPoll = new Poll(req.body);
  newPoll.save(function(err) {
    if (err) throw err;
    res.json(newPoll)
  });
}

module.exports.pollsGetOne = function(req, res) {
  Poll.findById(req.params.id, function(err, poll) {
    if (err) throw err;
    res.json(poll)
  });
}

module.exports.pollsUpdateOne = function(req, res) {
  // Once the front end is complete, see if this accesses the user ip.
  console.log(req.connection.remoteAddress)
  res.json({"success":200})
  // Poll.findById(req.params.id, function(err, poll) {
  //   if (err) throw err;
  //   // get Username or ip (start with ip) and add it to voted array
  //   poll.save(function(err) {
  //     if (err) throw err;
  //     res.json(user)
  //   });
  // });
}

module.exports.pollsDeleteOne = function(req, res) {
  Poll.findById(req.params.id, function(err, poll) {
    if (err) throw err;
    poll.remove(function(err) {
      if (err) throw err;
      res.json(poll)
    });
  });
}
