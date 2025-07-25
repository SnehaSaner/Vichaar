// models/fundingModel.js
const mongoose = require('mongoose');

// Define the funding schema
const fundingSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, // Reference to project
    fundingRequested: { type: Number, required: true },
    fundingApproved: { type: Number },
    fundingSource: { type: String }, // 'government', 'private', 'self-funded'
    disbursementDates: [
        {
            disbursementDate: { type: Date },
            amount: { type: Number }
        }
    ],
    fundingSpent: [
        {
            spentDate: { type: Date },
            amount: { type: Number },
            description: { type: String } // Description of spending
        }
    ],
    status: { type: String, enum: ['requested', 'approved', 'disbursed'], default: 'requested' }
});

// Export the funding model
const Funding = mongoose.model('Funding', fundingSchema);
module.exports = Funding;
