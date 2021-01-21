const db = require('../services/db');
const helper = require('../helper');
const config = require('../config');
const listPerPage = Number(config.listPerPage);

async function getAllQuotes(page) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(`SELECT id, quote, author FROM quote ORDER BY id LIMIT ? OFFSET ?`, [listPerPage, offset]);
  const data = helper.emotyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
};

async function getQuoteById(quoteId) {
  const data = await db.query(`SELECT id, quote, author FROM quote WHERE id = ?`,[quoteId]);
  return {
    data
  }
}

module.exports = {
  getAllQuotes,
  getQuoteById
}