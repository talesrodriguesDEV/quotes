const listQuotes = require('../use-cases/quote/listQuotes')
const addQuote = require('../use-cases/quote/addQuote')
const updateQuote = require('../use-cases/quote/updateQuote')
const removeQuote = require('../use-cases/quote/removeQuote')

const { randomUUID } = require('crypto')

const getQuote = async ({ quoteDbHandler }) => {
  const quotes = await listQuotes(quoteDbHandler)

  return { httpStatus: 200, json: quotes }
}

const postQuote = async ({ body, quoteDbHandler, authorDbHandler }) => {
  try {
    body.id = randomUUID()
    await addQuote(body, quoteDbHandler, authorDbHandler)

    return { httpStatus: 201, json: { message: 'Quote added successfully.' } }
  } catch ({ message }) {
    return { httpStatus: 400, json: { message } }
  }
}

const putQuote = async ({ params, body, quoteDbHandler }) => {
  try {
    await updateQuote(params.id, body, quoteDbHandler)

    return { httpStatus: 200, json: { message: 'Quote updated successfully.' } }
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return { httpStatus: code, json: { message } }
  }
}

const deleteQuote = async ({ params, quoteDbHandler }) => {
  try {
    await removeQuote(params.id, quoteDbHandler)

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
