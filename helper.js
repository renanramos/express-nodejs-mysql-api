function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emotyOrRows(rows) {
  return rows ? rows : [];
}

module.exports = {
  getOffset,
  emotyOrRows
}