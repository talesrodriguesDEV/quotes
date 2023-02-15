module.exports = async function deleteQuote (author, databaseHandler) {
  await databaseHandler.removeByAuthor(author)
}
