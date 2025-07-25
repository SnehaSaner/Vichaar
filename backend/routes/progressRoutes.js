const db = require('../config/db');

// Create progress
const createProgress = (data, callback) => {
  const query = 'INSERT INTO progress SET ?';
  db.query(query, data, callback);
};

// Get all progress records
const getAllProgress = (callback) => {
  db.query('SELECT * FROM progress', callback);
};

module.exports = { createProgress, getAllProgress };
const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

router.post('/progress', progressController.createProgress);
router.get('/progress', progressController.getAllProgress);

module.exports = router;
