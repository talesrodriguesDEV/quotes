module.exports = async function listAuthors (authorDbHandler) {
  return await authorDbHandler.list()
}
