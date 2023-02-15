module.exports = async function filterQuote (text, quoteDbHandler) {
  return await quoteDbHandler.filter(text)
}
