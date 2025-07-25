const Mentorship = require('../models/mentorshipModel');

const createMentorship = (req, res) => {
  Mentorship.createMentorship(req.body, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(201).json({ message: 'Mentorship created', data: result });
  });
};

const getAllMentorships = (req, res) => {
  Mentorship.getAllMentorships((err, data) => {
    if (err) return res.status(500).json({ message: 'Error', error: err });
    res.status(200).json(data);
  });
};

module.exports = { createMentorship, getAllMentorships };
