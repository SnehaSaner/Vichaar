const express = require('express');
const Comment = require('../research-management-platform/models/commentModel'); // Assuming you have a Comment model defined
const router = express.Router();

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single comment by ID
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        res.json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        user: req.body.user, // assuming the comment belongs to a user
        text: req.body.text,
        postId: req.body.postId, // assuming it's related to a post or project
        createdAt: Date.now(),
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an existing comment
router.patch('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        if (req.body.text != null) {
            comment.text = req.body.text;
        }

        const updatedComment = await comment.save();
        res.json(updatedComment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        await comment.remove();
        res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
