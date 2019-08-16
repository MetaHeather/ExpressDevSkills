//Requires
//bring in skills model
var Skills = require('../models/skill');


//export object
module.exports = {
    index,
    show,
    deleteSkill,
    create,
    newSkill
}


//funciton to render skills list
function index(req, res) {
    res.render('skills/index', {
      skills: Skills.getAll()
    });
  }

  //function to delete skill
  function show(req,res) {
      res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        id: req.params.id
      });
  }

  function deleteSkill(req, res){
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  //Adds a skill to skill array in model
  function create(req, res){
    Skills.addOne(req.body);
    res.redirect('/skills');
  };

  //Renders index with new skill added
  function newSkill(req, res){
    res.render('skills/new');
  }
