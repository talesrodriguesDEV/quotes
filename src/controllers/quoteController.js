const listQuotes = require('../use-cases/quote/listQuotes')
const addQuote = require('../use-cases/quote/addQuote')
const updateQuote = require('../use-cases/quote/updateQuote')
const removeQuote = require('../use-cases/quote/removeQuote')

const { randomUUID } = require('crypto')

async function getQuote (req, res) {
  const quotes = await listQuotes(req.quoteDbHandler)

  res.json({ quotes })
}

async function postQuote (req, res) {
  try {
    req.body.id = randomUUID()
    await addQuote(req.body, req.quoteDbHandler, req.authorDbHandler)

    return res.status(201).json({ message: 'Quote added successfully.' })
  } catch ({ message }) {
    return res.status(400).json({ message })
  }
}

async function putQuote (req, res) {
  const { id } = req.params

  try {
    await updateQuote(id, req.body, req.quoteDbHandler)

    return res.json({ message: 'Quote updated successfully.' })
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return res.status(code).json({ message })
  }
}

async function deleteQuote (req, res) {
  const { id } = req.params

  try {
    await removeQuote(id, req.quoteDbHandler)

    return res.json({ message: 'Quote deleted successfully.' })
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return res.status(code).json({ message })
  }
}

module.exports = {
  getQuote,
  postQuote,
  putQuote,
  deleteQuote
}
