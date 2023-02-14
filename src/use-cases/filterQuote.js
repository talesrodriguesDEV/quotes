module.exports = async function filterQuote (text, databaseHandler) {
  return await databaseHandler.filter(text)
}
