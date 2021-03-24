var express = require('express');
var router = express.Router();

const teams = require("../data/teams").teams;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('galaxygames/index', { teams });
});

module.exports = router;