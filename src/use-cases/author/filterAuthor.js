module.exports = async function filterAuthor (name, authorDbHandler) {
  return await authorDbHandler.filter(name)
}
