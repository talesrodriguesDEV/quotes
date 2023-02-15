const Quote = require('../../entities/Quote')

const filterQuote = require('./filterQuote')
const filterAuthor = require('../author/filterAuthor')

module.exports = async function addQuote ({ id, text, author }, quoteDbHandler, authorDbHandler) {
  const quote = await filterQuote(text, quoteDbHandler)
  if (quote) throw new Error('Quote already exists.')

  const authorExists = await filterAuthor(author, authorDbHandler)

  if (!authorExists) throw new Error('Author doesn\'t exist.')

  const rawQuote = {
    id,
    text,
    author,
    length: text.length,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const validQuote = Quote(rawQuote)

  await quoteDbHandler.add(validQuote)
}
