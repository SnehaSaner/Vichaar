const Funding = require('../models/fundingModel');

// Create funding
exports.createFunding = async (req, res) => {
    try {
        const funding = new Funding(req.body);
        await funding.save();
        res.status(201).json({ success: true, funding });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all fundings
exports.getAllFundings = async (req, res) => {
    try {
        const fundings = await Funding.find({});
        res.status(200).json({ success: true, fundings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get funding by ID
exports.getFundingById = async (req, res) => {
    try {
        const funding = await Funding.findById(req.params.id);
        if (!funding) return res.status(404).json({ success: false, message: 'Funding not found' });
        res.status(200).json({ success: true, funding });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update funding
exports.updateFunding = async (req, res) => {
    try {
        const funding = await Funding.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!funding) return res.status(404).json({ success: false, message: 'Funding not found' });
        res.status(200).json({ success: true, funding });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete funding
exports.deleteFunding = async (req, res) => {
    try {
        const funding = await Funding.findByIdAndDelete(req.params.id);
        if (!funding) return res.status(404).json({ success: false, message: 'Funding not found' });
        res.status(200).json({ success: true, message: 'Funding deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
