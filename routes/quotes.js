const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');
const { ErrorHandler } = require('../helpers/error');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
  const page = req.query.page && !isNaN(req.query.page) ? req.query.page : 1;

  try {
    res.json(await quotes.getAllQuotes(page));
  } catch (error) {
    next(err);
  }
});

router.get('/:quoteId', async function(req, res, next) {
  try {
    quote = await quotes.getQuoteById(req.params.quoteId);
    if (!quote.data.length) {
      throw new ErrorHandler(404, 'Citação não localizada');    
    }
    res.json(quote)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
