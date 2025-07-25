const Progress = require('../models/progressModel');

const createProgress = (req, res) => {
  Progress.createProgress(req.body, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(201).json({ message: 'Progress added', data: result });
  });
};

const getAllProgress = (req, res) => {
  Progress.getAllProgress((err, data) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(200).json(data);
  });
};

module.exports = { createProgress, getAllProgress };
