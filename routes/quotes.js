const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

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
    res.json(await quotes.getQuoteById(req.params.quoteId))
  } catch (error) {
    next(error);
  }
});

module.exports = router;
