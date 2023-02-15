const Quote = require('../../entities/Quote')

const filterQuote = require('./filterQuote')

module.exports = async function addQuote ({ id, text, author }, databaseHandler) {
  const quote = await filterQuote(text, databaseHandler)
  if (quote) throw new Error('Quote already exists.')

  // validate author

  const rawQuote = {
    id,
    text,
    author,
    length: text.length,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const validQuote = Quote(rawQuote)

  await databaseHandler.add(validQuote)
}
