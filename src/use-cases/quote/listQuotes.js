module.exports = async function listQuotes (quoteDbHandler) {
  return await quoteDbHandler.list()
}
