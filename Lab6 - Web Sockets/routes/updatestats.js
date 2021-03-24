var express = require('express');
var router = express.Router();

const teams = require("../data/teams").teams;

router.get('/', (req, res, next) => {
    res.render('galaxygames/updatestats', { teams });
});

module.exports = router;