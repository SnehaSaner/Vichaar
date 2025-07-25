const express = require('express');
const Publication = require('../research-management-platform/models/publicationModel');
const router = express.Router();

// Get all publications
router.get('/', async (req, res) => {
    try {
        const publications = await Publication.find();
        res.json(publications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single publication by ID
router.get('/:id', async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        if (!publication) return res.status(404).json({ message: 'Publication not found' });
        res.json(publication);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new publication
router.post('/', async (req, res) => {
    const publication = new Publication(req.body);

    try {
        const newPublication = await publication.save();
        res.status(201).json(newPublication);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a publication
router.patch('/:id', async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        if (!publication) return res.status(404).json({ message: 'Publication not found' });

        Object.assign(publication, req.body);
        const updatedPublication = await publication.save();
        res.json(updatedPublication);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a publication
router.delete('/:id', async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        if (!publication) return res.status(404).json({ message: 'Publication not found' });

        await publication.remove();
        res.json({ message: 'Publication deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
