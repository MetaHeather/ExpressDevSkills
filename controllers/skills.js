//Requires
//bring in skills model
var Skills = require('../models/skill');


//export object
module.exports = {
    index
}


//funciton to render skills list
function index(req, res) {
    res.render('skills/index', {
      skills: Skills.getAll()
    });
  }