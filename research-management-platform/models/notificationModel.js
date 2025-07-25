const mongoose = require('mongoose');

// Define the notification schema
const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // The user receiving the notification
    type: { type: String, required: true },  // Type of notification (e.g., 'connection', 'message')
    message: { type: String, required: true }, // The content of the notification
    isRead: { type: Boolean, default: false }, // Whether the notification is read or not
    date: { type: Date, default: Date.now }, // Date of the notification
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // The user sending the notification (e.g., for a new connection)
});

// Create and export the Notification model
const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
