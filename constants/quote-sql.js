
const GET_ALL_QUOTES = `SELECT id, quote, author FROM quote ORDER BY id LIMIT ? OFFSET ?`;
const GET_QUOTE_BY_ID = `SELECT id, quote, author FROM quote WHERE id = ?`;

module.exports = {
  GET_ALL_QUOTES,
  GET_QUOTE_BY_ID
}