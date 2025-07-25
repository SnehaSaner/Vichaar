const express = require('express');
const Funding = require('../research-management-platform/models/fundingModel');
const router = express.Router();

// Get all funding entries
router.get('/', async (req, res) => {
    try {
        const fundings = await Funding.find();
        res.json(fundings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single funding entry by ID
router.get('/:id', async (req, res) => {
    try {
        const funding = await Funding.findById(req.params.id);
        if (!funding) return res.status(404).json({ message: 'Funding entry not found' });
        res.json(funding);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new funding entry
router.post('/', async (req, res) => {
    const funding = new Funding(req.body);
    try {
        const newFunding = await funding.save();
        res.status(201).json(newFunding);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a funding entry
router.patch('/:id', async (req, res) => {
    try {
        const funding = await Funding.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!funding) return res.status(404).json({ message: 'Funding entry not found' });
        res.json(funding);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a funding entry
router.delete('/:id', async (req, res) => {
    try {
        const funding = await Funding.findByIdAndDelete(req.params.id);
        if (!funding) return res.status(404).json({ message: 'Funding entry not found' });
        res.json({ message: 'Funding entry deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
