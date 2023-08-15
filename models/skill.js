const skills = [
    {id: 189200, skill: 'Javascript', done: true},
    {id: 189201, skill: 'HTML', done: true},
    {id: 189202, skill: 'CSS', done: true},
    {id: 189203, skill: 'Python', done: true},
    {id: 189204, skill: 'C++', done: false},
    {id: 189205, skill: 'Java', done: false},
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id  = parseInt(id)
    return skills.find(skill => skill.id === id) 
  }