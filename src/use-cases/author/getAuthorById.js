module.exports = async function getAuthorById (id, authorDbHandler) {
  const author = await authorDbHandler.getById(id)

  // eslint-disable-next-line no-throw-literal
  if (!author) throw { status: 404, message: 'Author not found' }

  return author
}
