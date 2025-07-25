// fundingModel.js ✅
const db = require('../config/db');

const createFunding = (data, callback) => {
  const { amount, source, project_id } = data;
  const query = 'INSERT INTO fundings (amount, source, project_id) VALUES (?, ?, ?)';
  db.query(query, [amount, source, project_id], callback);
};

const getAllFunding = (callback) => {
  db.query('SELECT * FROM fundings', callback);
};

module.exports = {
  createFunding,
  getAllFunding
};
