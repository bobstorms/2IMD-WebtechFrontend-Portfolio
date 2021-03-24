var express = require('express');
var router = express.Router();

const teams = [
  {
    "id": "team-venus",
    "name": "Team Venus",
    "code": "AC3",
    "score": 450
  },
  {
    "id": "team-mars",
    "name": "Team Mars",
    "code": "BU8",
    "score": 420
  },
  {
    "id": "team-mercury",
    "name": "Team Mercury",
    "code": "RS3",
    "score": 400
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('galaxygames/index', { teams });
});

module.exports = router;