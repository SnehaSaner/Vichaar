const express = require('express');
const Mentorship = require('../research-management-platform/models/mentorshipModel');
const router = express.Router();

// Get all mentorship records
router.get('/', async (req, res) => {
    try {
        const mentorships = await Mentorship.find();
        res.json(mentorships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new mentorship record
router.post('/', async (req, res) => {
    const mentorship = new Mentorship(req.body);

    try {
        const newMentorship = await mentorship.save();
        res.status(201).json(newMentorship);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a mentorship record
router.patch('/:id', async (req, res) => {
    try {
        const mentorship = await Mentorship.findById(req.params.id);
        if (!mentorship) return res.status(404).json({ message: 'Mentorship record not found' });

        Object.assign(mentorship, req.body);
        const updatedMentorship = await mentorship.save();
        res.json(updatedMentorship);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a mentorship record
router.delete('/:id', async (req, res) => {
    try {
        const mentorship = await Mentorship.findById(req.params.id);
        if (!mentorship) return res.status(404).json({ message: 'Mentorship record not found' });

        await mentorship.remove();
        res.json({ message: 'Mentorship record deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
