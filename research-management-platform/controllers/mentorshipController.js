const Mentorship = require('../models/mentorshipModel');

// Create new mentorship
exports.createMentorship = async (req, res) => {
    try {
        const mentorship = new Mentorship(req.body);
        await mentorship.save();
        res.status(201).json({ success: true, mentorship });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all mentorships
exports.getAllMentorships = async (req, res) => {
    try {
        const mentorships = await Mentorship.find({});
        res.status(200).json({ success: true, mentorships });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get mentorship by ID
exports.getMentorshipById = async (req, res) => {
    try {
        const mentorship = await Mentorship.findById(req.params.id);
        if (!mentorship) return res.status(404).json({ success: false, message: 'Mentorship not found' });
        res.status(200).json({ success: true, mentorship });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update mentorship
exports.updateMentorship = async (req, res) => {
    try {
        const mentorship = await Mentorship.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!mentorship) return res.status(404).json({ success: false, message: 'Mentorship not found' });
        res.status(200).json({ success: true, mentorship });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete mentorship
exports.deleteMentorship = async (req, res) => {
    try {
        const mentorship = await Mentorship.findByIdAndDelete(req.params.id);
        if (!mentorship) return res.status(404).json({ success: false, message: 'Mentorship not found' });
        res.status(200).json({ success: true, message: 'Mentorship deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
