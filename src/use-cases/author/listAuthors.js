module.exports = async function listAuthors (databaseHandler) {
  return await databaseHandler.list()
}
