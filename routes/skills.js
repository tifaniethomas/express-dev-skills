var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

// All actual paths start with '/skills'

router.get('/', skillsCtrl.index);

//GET /skills/new <---- define BEFORE show route
router.get('/new'. skillsCtrl.new)

//GET /skills/:id
router.get('/:id', skillsCtrl.show)

module.exports = router;
