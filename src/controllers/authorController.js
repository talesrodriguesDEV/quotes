const listAuthors = require('../use-cases/author/listAuthors')
const addAuthor = require('../use-cases/author/addAuthor')
const updateAuthor = require('../use-cases/author/updateAuthor')
const removeAuthor = require('../use-cases/author/removeAuthor')

const { randomUUID } = require('crypto')

const getAuthor = async (req, res) => {
  const authors = await listAuthors(req.authorDbHandler)

  res.json({ authors })
}

const postAuthor = async (req, res) => {
  try {
    req.body.id = randomUUID()
    await addAuthor(req.body, req.authorDbHandler)

    return res.status(201).json({ message: 'Author added successfully.' })
  } catch ({ message }) {
    return res.status(400).json({ message })
  }
}

const putAuthor = async (req, res) => {
  const { id } = req.params

  try {
    await updateAuthor(id, req.body, req.authorDbHandler, req.quoteDbHandler)

    return res.json({ message: 'Author updated successfully.' })
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return res.status(code).json({ message })
  }
}

const deleteAuthor = async (req, res) => {
  const { id } = req.params

  try {
    await removeAuthor(id, req.authorDbHandler, req.quoteDbHandler)

    return res.json({ message: 'Author deleted successfully.' })
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return res.status(code).json({ message })
  }
}

module.exports = {
  getAuthor,
  postAuthor,
  putAuthor,
  deleteAuthor
}
