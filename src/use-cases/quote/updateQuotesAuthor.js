module.exports = async function updateQuotesAuthor (previousAuthor, updatedAuthor, quoteDbHandler) {
  await quoteDbHandler.updateQuotesAuthor(previousAuthor, updatedAuthor)
}
