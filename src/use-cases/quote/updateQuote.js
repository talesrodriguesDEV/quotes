const Quote = require('../../entities/Quote')

const getQuoteById = require('./getQuoteById')

module.exports = async function updatedQuote (id, { text, author }, databaseHandler) {
  const quote = await getQuoteById(id, databaseHandler)

  quote.updatedAt = new Date()

  if (text) {
    quote.text = text
    quote.length = text.length
  }
  if (author) quote.author = author

  const validQuote = Quote(quote)
  await databaseHandler.update(id, validQuote)
}
