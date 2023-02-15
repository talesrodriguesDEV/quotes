const getAuthorById = require('./getAuthorById')

const removeQuotesByAuthor = require('../quote/removeQuotesByAuthor')

module.exports = async function removeAuthor (id, authorDbHandler, quoteDbHandler) {
  const { name } = await getAuthorById(id, authorDbHandler)

  await removeQuotesByAuthor(name, quoteDbHandler)
  await authorDbHandler.remove(id)
}
