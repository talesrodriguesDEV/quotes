const Author = require('../../entities/Author')

const getAuthorById = require('./getAuthorById')

const updateQuotesAuthor = require('../quote/updateQuotesAuthor')

module.exports = async function updateQuote (id, { name, age, country }, authorDbHandler, quoteDbHandler) {
  const author = await getAuthorById(id, authorDbHandler)
  const previousAuthorName = author.name

  if (name) author.name = name
  if (age) author.age = age
  if (country) author.country = country

  author.updatedAt = new Date()

  const validAuthor = Author(author)

  await updateQuotesAuthor(previousAuthorName, name, quoteDbHandler)
  await authorDbHandler.update(id, validAuthor)
}
