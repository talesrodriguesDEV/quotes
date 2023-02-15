const Quote = require('../../entities/Quote')

const getQuoteById = require('./getQuoteById')

module.exports = async function updateQuote (id, { text }, databaseHandler) {
  if (!text) throw new Error('Text missing.')

  const quote = await getQuoteById(id, databaseHandler)

  quote.text = text
  quote.length = text.length
  quote.updatedAt = new Date()

  const validQuote = Quote(quote)
  await databaseHandler.update(id, validQuote)
}
