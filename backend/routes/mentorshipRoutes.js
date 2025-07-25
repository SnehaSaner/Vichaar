const express = require('express');
const router = express.Router();
const mentorshipController = require('../controllers/mentorshipController');

router.post('/', mentorshipController.createMentorship);
router.get('/', mentorshipController.getAllMentorships);

module.exports = router;
