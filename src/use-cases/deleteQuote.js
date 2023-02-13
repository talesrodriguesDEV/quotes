module.exports = async function deleteQuote (id, databaseHandler) {
  return await databaseHandler.remove(id)
}
