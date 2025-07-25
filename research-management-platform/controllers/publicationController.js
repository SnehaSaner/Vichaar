const Publication = require('../models/publicationModel');

// Create, Read, Update, Delete for publications
exports.createPublication = async (req, res) => {
    try {
        const publication = new Publication(req.body);
        await publication.save();
        res.status(201).json(publication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPublications = async (req, res) => {
    try {
        const publications = await Publication.find({});
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPublicationById = async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        if (!publication) {
            return res.status(404).json({ message: 'Publication not found' });
        }
        res.status(200).json(publication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePublication = async (req, res) => {
    try {
        const publication = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!publication) {
            return res.status(404).json({ message: 'Publication not found' });
        }
        res.status(200).json(publication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePublication = async (req, res) => {
    try {
        const publication = await Publication.findByIdAndDelete(req.params.id);
        if (!publication) {
            return res.status(404).json({ message: 'Publication not found' });
        }
        res.status(200).json({ message: 'Publication deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
