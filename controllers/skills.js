const Skill = require('../models/skills');

module.exports = {
    index, 
    show, 
    new: newSkill, 
    create, 
    delete: deleteSkill,
    update, 
    edit, 
};
// Index (or show all) conoteroller function
function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  };

//Show controller function
function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  })
}

// New skill conteroller function
function newSkill(req, res) {
  res.render('skills/new');
}
// Function called to create new skill
function create(req, res) {
  Skill.create(req.body);
  console.log(req.body)
  res.redirect('/skills');
  }

// Deletes skill
function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills')
}

// edit skills functions
function edit(req, res) {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id),
  })
}

function update(req, res){
  Skill.update(req.body, req.params.id);
  console.log(req.body);
  console.log(req.params.id)
  res.redirect(`/skills/${req.params.id}`)
}