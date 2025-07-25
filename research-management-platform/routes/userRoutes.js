const express = require('express');
const User = require('../research-management-platform/models/userModel');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a user
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Validate the incoming data
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide name, email, and password.",
        });
    }

    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "Email already exists.",
        });
    }

    // Create a new user
    const newUser = new User({
        name,
        email,
        password,
    });

    try {
        // Save the new user to the database
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user: newUser,
        });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
});


module.exports = router;
