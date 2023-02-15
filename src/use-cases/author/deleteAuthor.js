const getAuthorById = require('./getAuthorById')

const deleleteQuotesByAuthor = require('../quote/deleteQuotesByAuthor')

module.exports = async function deleteAuthor (id, authorDbHandler, quoteDbHandler) {
  const { name } = await getAuthorById(id, authorDbHandler)

  await deleleteQuotesByAuthor(name, quoteDbHandler)

  return await authorDbHandler.remove(id)
}
