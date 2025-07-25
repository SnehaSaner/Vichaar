// models/usermodel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Use capital 'S' for String
    email: { type: String, required: true, unique: true }, // Capital 'S'
    password: { type: String, required: true }, // Capital 'S'
    dateJoined: { type: Date, default: Date.now }, // Capital 'D'
    profile: {
        bio: { type: String },
        skills: [{ type: String }], // Array of Strings
        researchInterests: [{ type: String }], // Array of Strings
        startupsInvolved: [{ type: String }], // Array of Strings
        publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }] // References to Publication IDs
    }

});

// Pre-save hook to hash the password before saving the user to the database
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // If password is not modified, proceed with save
    
    try {
        // Hash password with 10 rounds of salting
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare password during login
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error('Error comparing password');
    }
};


const User = mongoose.model('User', userSchema);
module.exports = User;
