const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Change these
router.post('/', projectController.createProject); // was /projects
router.get('/', projectController.getAllProjects); // was /projects

module.exports = router;
