module.exports = async function getAuthorById (id, databaseHandler) {
  const author = await databaseHandler.getById(id)

  // eslint-disable-next-line no-throw-literal
  if (!author) throw { status: 404, message: 'Author not found' }

  return author
}
