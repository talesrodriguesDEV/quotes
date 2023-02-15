module.exports = async function updateQuotesAuthor (previousAuthor, updatedAuthor, databaseHandler) {
  await databaseHandler.updateQuotesAuthor(previousAuthor, updatedAuthor)
}
