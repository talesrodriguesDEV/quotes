const Quote = require('../../entities/Quote')

module.exports = async function addQuote ({ id, text, author }, databaseHandler) {
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
