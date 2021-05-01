const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    quote: {
        type: String,
        trim: true,
        required: true
    },
    thoughts: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {timestamps: true})

module.exports = mongoose.model('Quote', quoteSchema);