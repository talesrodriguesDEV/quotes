const getQuoteById = require('./getQuoteById')

module.exports = async function removeQuote (id, quoteDbHandler) {
  await getQuoteById(id, quoteDbHandler)
  await quoteDbHandler.remove(id)
}
