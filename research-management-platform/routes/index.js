const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({ success: true, message: "Test route working" });
  });

// Importing the controllers
const projectController = require('../controllers/projectController');
const publicationController = require('../controllers/publicationController');
const fundingController = require('../controllers/fundingController');
const userController = require('../controllers/userController');
const progressController = require('../controllers/progressController');
const mentorshipController = require('../controllers/mentorshipController');
const commentController = require('../controllers/commentController');

// Corrected path to the User model in index.js
const User = require('../models/userModel');

// Import auth routes
const authRoutes = require('./auth');  // Correct path to auth.js

// Use the auth routes under '/auth'
router.use('/auth', authRoutes);


// Project routes
router.post('/projects', projectController.createProject);
router.get('/projects', projectController.getAllProjects);
router.get('/projects/:id', projectController.getProjectById);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);

// Publication routes
router.post('/publications', publicationController.createPublication);
router.get('/publications', publicationController.getAllPublications);
router.get('/publications/:id', publicationController.getPublicationById);
router.put('/publications/:id', publicationController.updatePublication);
router.delete('/publications/:id', publicationController.deletePublication);

// Funding routes
router.post('/fundings', fundingController.createFunding);
router.get('/fundings', fundingController.getAllFundings);
router.get('/fundings/:id', fundingController.getFundingById);
router.put('/fundings/:id', fundingController.updateFunding);
router.delete('/fundings/:id', fundingController.deleteFunding);

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Progress routes
router.post('/progress', progressController.createProgress);
router.get('/progress', progressController.getAllProgress);
router.get('/progress/:id', progressController.getProgressById);
router.put('/progress/:id', progressController.updateProgress);
router.delete('/progress/:id', progressController.deleteProgress);

// Mentorship routes
router.post('/mentorships', mentorshipController.createMentorship);
router.get('/mentorships', mentorshipController.getAllMentorships);
router.get('/mentorships/:id', mentorshipController.getMentorshipById);
router.put('/mentorships/:id', mentorshipController.updateMentorship);
router.delete('/mentorships/:id', mentorshipController.deleteMentorship);

// Comment routes
router.post('/comments', commentController.createComment); // Changed from '/comment' to '/comments'
router.get('/comments', commentController.getAllComments); // Changed from '/comment' to '/comments'
router.get('/comments/:id', commentController.getCommentById);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

// POST route to register a new user
router.post('/users/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save(); // Save the user to the database
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

module.exports = router;
