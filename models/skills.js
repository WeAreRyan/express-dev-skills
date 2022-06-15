const skills = [
    {id: 01, language: 'HTML', mastered: false},
    {id: 02, language: 'CSS', mastered: false},
    {id: 03, language: 'JavaScript', mastered: false}
  ];

  module.exports = {
    getAll, 
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }