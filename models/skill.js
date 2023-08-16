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
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, updatedSkill) {
    id  = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
  }

  function deleteOne(id) {
    id = parseInt(id)
    // find the idx for the skill
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id  = parseInt(id)
    return skills.find(skill => skill.id === id) 
  }