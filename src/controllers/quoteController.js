const listQuotes = require('../use-cases/quote/listQuotes')
const addQuote = require('../use-cases/quote/addQuote')
const updateQuote = require('../use-cases/quote/updateQuote')
const removeQuote = require('../use-cases/quote/removeQuote')

const { randomUUID } = require('crypto')

const getQuote = async (req) => {
  const quotes = await listQuotes(req.quoteDbHandler)

  return { httpStatus: 200, json: quotes }
}

const postQuote = async (req) => {
  try {
    req.body.id = randomUUID()
    await addQuote(req.body, req.quoteDbHandler, req.authorDbHandler)

    return { httpStatus: 201, json: { message: 'Quote added successfully.' } }
  } catch ({ message }) {
    return { httpStatus: 400, json: { message } }
  }
}

const putQuote = async (req) => {
  const { id } = req.params

  try {
    await updateQuote(id, req.body, req.quoteDbHandler)

    return { httpStatus: 200, json: { message: 'Quote updated successfully.' } }
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return { httpStatus: code, json: { message } }
  }
}

const deleteQuote = async (req) => {
  const { id } = req.params

  try {
    await removeQuote(id, req.quoteDbHandler)

    return { httpStatus: 200, json: { message: 'Quote deleted successfully.' } }
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return { httpStatus: code, json: { message } }
  }
}

module.exports = {
  getQuote,
  postQuote,
  putQuote,
  deleteQuote
}
