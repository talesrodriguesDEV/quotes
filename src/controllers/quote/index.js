const addQuote = require('../../use-cases/quote/addQuote')
const deleteQuote = require('../../use-cases/quote/deleteQuote')
const listQuotes = require('../../use-cases/quote/listQuotes')
const updateQuote = require('../../use-cases/quote/updateQuote')

const { randomUUID } = require('crypto')

async function getController (req, res) {
  const quotes = await listQuotes(req.quoteDbHandler)

  res.json({ quotes })
}

async function postController (req, res) {
  try {
    req.body.id = randomUUID()
    await addQuote(req.body, req.quoteDbHandler, req.authorDbHandler)

    return res.status(201).json({ message: 'Quote added successfully.' })
  } catch ({ message }) {
    return res.status(400).json({ message })
  }
}

async function putController (req, res) {
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

async function deleteController (req, res) {
  const { id } = req.params

  try {
    await deleteQuote(id, req.quoteDbHandler)

    return res.json({ message: 'Quote deleted successfully.' })
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return res.status(code).json({ message })
  }
}

module.exports = {
  getController,
  postController,
  putController,
  deleteController
}
