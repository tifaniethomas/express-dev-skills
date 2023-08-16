const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
  };

  function update(req, res) {
    req.body.done = !!req.body.done
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
  }

  function edit(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
      title: 'Edit Skill',
      skill
    })
  }

  function create(req, res) {
    console.log(req.body)
    // models are responsible for CRUD'ing the data
    Skill.create(req.body)
    // always do redirect when data has changed
    res.redirect('/skills')
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
  }
  
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skill Details'
    })
  }
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }
