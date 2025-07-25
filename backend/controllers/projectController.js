const Project = require('../models/projectmodel');

const createProject = (req, res) => {
  Project.createProject(req.body, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(201).json({ message: 'Project added', data: result });
  });
};

const getAllProjects = (req, res) => {
  Project.getAllProjects((err, data) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(200).json(data);
  });
};

module.exports = { createProject, getAllProjects };
