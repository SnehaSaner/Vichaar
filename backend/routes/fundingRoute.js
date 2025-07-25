const express = require('express');
const router = express.Router();
const fundingController = require('../controllers/fundingController');

router.post('/', fundingController.createFunding); // ✅
router.get('/', fundingController.getAllFunding);  // ✅

module.exports = router;
