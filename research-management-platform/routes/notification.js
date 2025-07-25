const express = require('express');
const Notification = require('../models/notificationModel');
const User = require('../models/userModel'); // Assuming the User model is in models/User.js
const router = express.Router();

// Create a new notification (POST /notifications)
router.post('/', async (req, res) => {
    const { userId, type, message, senderId } = req.body;

    try {
        // Create a new notification
        const newNotification = new Notification({
            userId,
            type,
            message,
            senderId
        });

        // Save the notification to the database
        await newNotification.save();

        res.status(201).json({ message: 'Notification created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch all notifications for a user (GET /notifications/:userId)
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Fetch the notifications for the user
        const notifications = await Notification.find({ userId })
            .sort({ date: -1 });  // Sort notifications by date (latest first)

        res.status(200).json({ notifications });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Mark a notification as read (PUT /notifications/:id)
router.put('/:id', async (req, res) => {
    const notificationId = req.params.id;

    try {
        // Update the notification's 'isRead' status to true
        const updatedNotification = await Notification.findByIdAndUpdate(
            notificationId,
            { isRead: true },
            { new: true }
        );

        res.status(200).json({ updatedNotification });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
