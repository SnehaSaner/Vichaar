const db = require('../config/db');

// Create mentorship
const createMentorship = (data, callback) => {
  const query = 'INSERT INTO mentorships SET ?';
  db.query(query, data, callback);
};

// Get all mentorships
const getAllMentorships = (callback) => {
  db.query('SELECT * FROM mentorships', callback);
};

module.exports = { createMentorship, getAllMentorships };
