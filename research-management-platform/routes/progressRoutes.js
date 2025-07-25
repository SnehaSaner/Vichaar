const express = require('express');
const Progress = require('../research-management-platform/models/progressModel');
const router = express.Router();

// Get all progress entries
router.get('/', async (req, res) => {
    try {
        const progress = await Progress.find();
        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single progress entry by ID
router.get('/:id', async (req, res) => {
    try {
        const progress = await Progress.findById(req.params.id);
        if (!progress) return res.status(404).json({ message: 'Progress not found' });
        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new progress entry
router.post('/', async (req, res) => {
    const progress = new Progress(req.body);
    try {
        const newProgress = await progress.save();
        res.status(201).json(newProgress);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a progress entry
router.patch('/:id', async (req, res) => {
    try {
        const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!progress) return res.status(404).json({ message: 'Progress not found' });
        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a progress entry
router.delete('/:id', async (req, res) => {
    try {
        const progress = await Progress.findByIdAndDelete(req.params.id);
        if (!progress) return res.status(404).json({ message: 'Progress not found' });
        res.json({ message: 'Progress entry deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
