module.exports = async function filterAuthor (name, databaseHandler) {
  return await databaseHandler.filter(name)
}
