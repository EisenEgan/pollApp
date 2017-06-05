var express = require('express');
var router = express.Router();

var ctrlPolls = require('../controllers/polls.controllers.js')

// Poll routes
router
  .route('/polls')
  .get(ctrlPolls.pollsGetAll)
  .post(ctrlPolls.pollsAddOne)

router
  .route('/polls/:pollId')
  .get(ctrlPolls.pollsGetOne)
  .put(ctrlPolls.pollsUpdateOne)
  .delete(ctrlPolls.pollsDeleteOne)

module.exports = router;
