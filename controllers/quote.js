const Quote = require('../models/quote');
const asyncHandler = require('express-async-handler');

// @desc Fetch all quotes
// @route GET /api/quotes
// @access Public
exports.getAllQuotes = asyncHandler(async(req, res) => {
    const quotes = await Quote.find({});
    res.json(quotes);
})

// @desc Fetch single quote
// @route GET /api/quotes/:id
// @access Public
exports.read = (req, res) => {
    const quoteId = req.params.id;
    Quote.findById(quoteId).exec((err, quote) => {
        if(err || !quote){
            return res.status(400).json({
                error: 'Quote not found.'
            })
        }
        res.json(quote);
    })
}

// @desc Create Single Quote
// @route POST /api/quotes
// @access Private
exports.createQuote = asyncHandler(async(req, res) => {
    const {bookTitle, author, quote} = req.body;
    const newquote = new Quote({bookTitle, author, quote});
    newquote.save((err, quote) => {
        if(err){
            console.log('error in saving quote.');
            return res.status(401).json({
                error: 'error saving quote in database.'
            })

        }
        return res.json({
            message: 'quote sent.'
        })

    })
})