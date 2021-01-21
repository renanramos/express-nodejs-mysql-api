const db = require('../services/db');
const helper = require('../helpers/helper');
const config = require('../config');
const SQL = require('../constants/quote-sql');
const { ErrorHandler } = require('../helpers/error');
const listPerPage = Number(config.listPerPage);

async function getAllQuotes(page) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(SQL.GET_ALL_QUOTES, [listPerPage, offset]);
  const data = helper.emotyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
};

async function getQuoteById(quoteId) {
  const data = await db.query(SQL.GET_QUOTE_BY_ID, [quoteId]);
  return {
    data
  }
}

module.exports = {
  getAllQuotes,
  getQuoteById
}