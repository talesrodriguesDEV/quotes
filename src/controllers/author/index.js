const listAuthors = require('../../use-cases/author/listAuthors')
const addAuthor = require('../../use-cases/author/addAuthor')
const updateAuthor = require('../../use-cases/author/updateAuthor')
const deleteAuthor = require('../../use-cases/author/deleteAuthor')

const { randomUUID } = require('crypto')

async function getController (req, res) {
  const authors = await listAuthors(req.authorDbHandler)

  res.json({ authors })
}

async function postController (req, res) {
  try {
    req.body.id = randomUUID()
    await addAuthor(req.body, req.authorDbHandler)

    return res.status(201).json({ message: 'Author added successfully.' })
  } catch ({ message }) {
    return res.status(400).json({ message })
  }
}

async function putController (req, res) {
  const { id } = req.params

  try {
    await updateAuthor(id, req.body, req.authorDbHandler)

    return res.json({ message: 'Author updated successfully.' })
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return res.status(code).json({ message })
  }
}

async function deleteController (req, res) {
  const { id } = req.params

  try {
    await deleteAuthor(id, req.authorDbHandler)

    return res.json({ message: 'Author deleted successfully.' })
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
