const Publication = require('../models/publicationmodel');

const createPublication = (req, res) => {
  Publication.createPublication(req.body, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(201).json({ message: 'Publication added', data: result });
  });
};

const getAllPublications = (req, res) => {
  Publication.getAllPublications((err, data) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(200).json(data);
  });
};

module.exports = { createPublication, getAllPublications };
