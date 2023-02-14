module.exports = async function listQuotes (databaseHandler) {
  return await databaseHandler.list()
}
