var express = require('express');
var router = express.Router();
//bring in skills model
var Skills = require('../models/skill');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res){
  res.render('skills/index', {
    skills: Skills.getAll()
  });
});

module.exports = router;
