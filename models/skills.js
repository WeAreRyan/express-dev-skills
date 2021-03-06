const skills = [
    {id: 01, language: 'HTML', mastered: false},
    {id: 02, language: 'CSS', mastered: false},
    {id: 03, language: 'JavaScript', mastered: false}
  ];

  module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne, 
    update,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function update(editContent, id) {
    id = parseInt(id);
    console.log(editContent)
    const skillUpdate = skills.find(skill => skill.id === id);
    skillUpdate.language = editContent.language;
    // console.log(todoUpdate)
  }
