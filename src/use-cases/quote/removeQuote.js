const getQuoteById = require('./getQuoteById')

module.exports = async (id, quoteDbHandler) => {
  await getQuoteById(id, quoteDbHandler)
  await quoteDbHandler.remove(id)
}
