const addQuote = require('../use-cases/addQuote')
const deleteQuote = require('../use-cases/deleteQuote')
const listQuotes = require('../use-cases/listQuotes')
const updateQuote = require('../use-cases/updateQuote')

const { randomUUID } = require('crypto')

async function getController (req, res) {
  const x = await listQuotes(req.quoteDbHandler)
  res.json(x)
}

async function postController (req, res) {
  try {
    req.body.id = randomUUID()
    await addQuote(req.body, req.quoteDbHandler)
    return res.status(201).end()
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

async function putController (req, res) {
  const { id } = req.params

  try {
    await updateQuote(id, req.body, req.quoteDbHandler)
    return res.end()
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

async function deleteController (req, res) {
  const { id } = req.params

  await deleteQuote(id, req.quoteDbHandler)

  return res.end()
}

module.exports = {
  getController,
  postController,
  putController,
  deleteController
}
