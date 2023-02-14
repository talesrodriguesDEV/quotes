const addQuote = require('../../use-cases/quote/addQuote')
const deleteQuote = require('../../use-cases/quote/deleteQuote')
const listQuotes = require('../../use-cases/quote/listQuotes')
const updateQuote = require('../../use-cases/quote/updateQuote')
const filterQuote = require('../../use-cases/quote/filterQuote')

const { randomUUID } = require('crypto')

async function getController (req, res) {
  const quotes = await listQuotes(req.quoteDbHandler)
  res.json({ quotes })
}

async function postController (req, res) {
  try {
    const quote = await filterQuote(req.body.text, req.quoteDbHandler)
    if (quote) throw new Error('Quote already exists.')

    req.body.id = randomUUID()
    await addQuote(req.body, req.quoteDbHandler)

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
  } catch ({ message }) {
    return res.status(400).json({ message })
  }
}

async function deleteController (req, res) {
  const { id } = req.params

  await deleteQuote(id, req.quoteDbHandler)

  return res.json({ message: 'Quote deleted successfully.' })
}

module.exports = {
  getController,
  postController,
  putController,
  deleteController
}
