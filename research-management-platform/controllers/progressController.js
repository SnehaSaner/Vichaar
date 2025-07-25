const Progress = require('../models/progressModel');

// Create new progress
exports.createProgress = async (req, res) => {
    try {
        const progress = new Progress(req.body);
        await progress.save();
        res.status(201).json({ success: true, progress });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all progress records
exports.getAllProgress = async (req, res) => {
    try {
        const progressRecords = await Progress.find({});
        res.status(200).json({ success: true, progressRecords });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get progress by ID
exports.getProgressById = async (req, res) => {
    try {
        const progress = await Progress.findById(req.params.id);
        if (!progress) return res.status(404).json({ success: false, message: 'Progress not found' });
        res.status(200).json({ success: true, progress });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update progress
exports.updateProgress = async (req, res) => {
    try {
        const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!progress) return res.status(404).json({ success: false, message: 'Progress not found' });
        res.status(200).json({ success: true, progress });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete progress
exports.deleteProgress = async (req, res) => {
    try {
        const progress = await Progress.findByIdAndDelete(req.params.id);
        if (!progress) return res.status(404).json({ success: false, message: 'Progress not found' });
        res.status(200).json({ success: true, message: 'Progress deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
