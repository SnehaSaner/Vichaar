const db = require('../config/db');

// Create new publication
const createPublication = (pubData, callback) => {
  const query = 'INSERT INTO publications SET ?';
  db.query(query, pubData, callback);
};

// Get all publications
const getAllPublications = (callback) => {
  db.query('SELECT * FROM publications', callback);
};

module.exports = { createPublication, getAllPublications };
