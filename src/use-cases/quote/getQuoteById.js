module.exports = async function getQuoteById (id, databaseHandler) {
  const quote = await databaseHandler.getById(id)

  // eslint-disable-next-line no-throw-literal
  if (!quote) throw { status: 404, message: 'Quote not found' }

  return quote
}
