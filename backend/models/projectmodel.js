const db = require('../config/db');

const createProject = (data, callback) => {
  const query = 'INSERT INTO projects SET ?';
  db.query(query, data, callback);
};

const getAllProjects = (callback) => {
  db.query('SELECT * FROM projects', callback);
};

module.exports = { createProject, getAllProjects };
