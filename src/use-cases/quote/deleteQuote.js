const getQuoteById = require('./getQuoteById')

module.exports = async function deleteQuote (id, databaseHandler) {
  await getQuoteById(id, databaseHandler)

  return await databaseHandler.remove(id)
}
