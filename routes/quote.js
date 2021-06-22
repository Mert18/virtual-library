const express = require('express');
const router = express.Router();

const {read, getAllQuotes, createQuote} = require('../controllers/quote');
const {requireSignin, adminMiddleware} = require('../controllers/auth');

router.get('/quotes/:id', read);
router.get('/quotes', getAllQuotes);
router.post('/quotes', requireSignin, createQuote);

module.exports = router;