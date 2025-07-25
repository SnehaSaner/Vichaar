const express = require('express');
const router = express.Router();
const pubController = require('../controllers/publicationController');

router.post('/publications', pubController.createPublication);
router.get('/publications', pubController.getAllPublications);

module.exports = router;
