module.exports = async function removeQuotesByAuthor (author, quoteDbHandler) {
  await quoteDbHandler.removeByAuthor(author)
}
