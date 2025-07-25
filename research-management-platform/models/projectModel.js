// models/projectModel.js
const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who created the project
    teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Team members (users)
    mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Mentors (users)
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: { type: String, enum: ['ongoing', 'completed', 'cancelled'], default: 'ongoing' },
    funding: {
        requested: { type: Number },
        approved: { type: Number },
        spent: { type: Number }
    },
    tags: [{ type: String }], // Keywords related to the project
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }], // References to publications
    progressReports: [
        {
            reportId: { type: mongoose.Schema.Types.ObjectId, ref: 'Progress' },
            submittedDate: { type: Date },
            progressDetails: { type: String }
        }
    ]
});

// Export the project model
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
