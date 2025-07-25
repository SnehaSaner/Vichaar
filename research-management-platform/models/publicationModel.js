const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    publishedDate: { type: Date, default: Date.now },
    documentUrl: { type: String, required: true },
    abstract: { type: String, required: true }
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;
