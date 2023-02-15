const Quote = require('../../entities/Quote')

const getQuoteById = require('./getQuoteById')

module.exports = async function updateQuote (id, { text }, quoteDbHandler) {
  if (!text) throw new Error('Text missing.')

  const quote = await getQuoteById(id, quoteDbHandler)

  quote.text = text
  quote.length = text.length
  quote.updatedAt = new Date()

  const validQuote = Quote(quote)

  await quoteDbHandler.update(id, validQuote)
}
