var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports.pollsGetAll = function(req, res) {
  Poll.find({}, function(err, polls) {
    if (err) throw err;
    res.json(polls)
  });
}

module.exports.pollsAddOne = function(req, res) {
  console.log("req.body")
  console.log(req.body)
  var newPoll = new Poll(req.body);
  console.log(newPoll)
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
