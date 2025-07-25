// models/mentorshipModel.js
const mongoose = require('mongoose');

// Define the mentorship schema
const mentorshipSchema = new mongoose.Schema({
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to mentor
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, // Reference to project
    mentorNotes: [
        {
            date: { type: Date, default: Date.now },
            note: { type: String }
        }
    ],
    meetings: [
        {
            meetingDate: { type: Date, required: true },
            meetingSummary: { type: String },
            nextSteps: { type: String }
        }
    ],
    mentorshipStatus: { type: String, enum: ['active', 'completed', 'pending'], default: 'active' },
    feedbackFromMentee: { type: String }
});

// Export the mentorship model
const Mentorship = mongoose.model('Mentorship', mentorshipSchema);
module.exports = Mentorship;
