// models/progressModel.js
const mongoose = require('mongoose');

// Define the progress tracking schema
const progressSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, // Reference to project
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to user
    submittedDate: { type: Date, default: Date.now },
    progressDetails: { type: String, required: true }, // Detailed report on the progress
    issuesFaced: { type: String }, // Problems encountered
    nextSteps: { type: String }, // Planned actions
    status: { type: String, enum: ['submitted', 'reviewed', 'approved'], default: 'submitted' }
});

// Export the progress model
const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
