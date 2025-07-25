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
