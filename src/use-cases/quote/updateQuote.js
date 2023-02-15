const Quote = require('../../entities/Quote')
const filterQuote = require('./filterQuote')

const getQuoteById = require('./getQuoteById')

module.exports = async (id, { text }, quoteDbHandler) => {
  if (!text) throw new Error('No quote text was provided.')

  const quoteAlreadyExists = await filterQuote(text, quoteDbHandler)
  if (quoteAlreadyExists) throw new Error('Quote already exists.')

  const quote = await getQuoteById(id, quoteDbHandler)

  quote.text = text
  quote.length = text.length
  quote.updatedAt = new Date()

  const validQuote = Quote(quote)

  await quoteDbHandler.update(id, validQuote)
}
