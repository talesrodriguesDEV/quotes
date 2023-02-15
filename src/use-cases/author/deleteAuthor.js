const getAuthorById = require('./getAuthorById')

module.exports = async function deleteAuthor (id, databaseHandler) {
  await getAuthorById(id, databaseHandler)

  return await databaseHandler.remove(id)
}
