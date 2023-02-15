const Author = require('../../entities/Author')

const getAuthorById = require('./getAuthorById')

module.exports = async function updateQuote (id, { name, age, country }, databaseHandler) {
  const author = await getAuthorById(id, databaseHandler)

  if (name) {
    author.name = name
    // update quote
  }
  if (age) author.age = age
  if (country) author.country = country

  author.updatedAt = new Date()

  const validAuthor = Author(author)
  await databaseHandler.update(id, validAuthor)
}
