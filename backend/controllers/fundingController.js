// fundingController.js ✅ Correct Version
const Funding = require('../models/fundingModel');

// Add new funding entry
const createFunding = (req, res) => {
  Funding.createFunding(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding funding', error: err });
    }
    res.status(201).json({ message: 'Funding record created', data: result });
  });
};

// Get all funding data
const getAllFunding = (req, res) => {
  Funding.getAllFunding((err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving funding', error: err });
    }
    res.status(200).json(data);
  });
};

module.exports = {
  createFunding,
  getAllFunding
};
