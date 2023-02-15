module.exports = async (id, quoteDbHandler) => {
  const quote = await quoteDbHandler.getById(id)

  // eslint-disable-next-line no-throw-literal
  if (!quote) throw { status: 404, message: 'Quote not found.' }

  return quote
}
