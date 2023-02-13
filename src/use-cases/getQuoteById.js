module.exports = async function getQuoteById (id, databaseHandler) {
  return await databaseHandler.getById(id)
}
