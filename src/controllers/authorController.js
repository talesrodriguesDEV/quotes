const listAuthors = require('../use-cases/author/listAuthors')
const addAuthor = require('../use-cases/author/addAuthor')
const updateAuthor = require('../use-cases/author/updateAuthor')
const removeAuthor = require('../use-cases/author/removeAuthor')

const { randomUUID } = require('crypto')

const getAuthor = async (req) => {
  const authors = await listAuthors(req.authorDbHandler)

  return { httpStatus: 200, json: authors }
}

const postAuthor = async (req) => {
  try {
    req.body.id = randomUUID()
    await addAuthor(req.body, req.authorDbHandler)

    return { httpStatus: 201, json: { message: 'Author added successfully.' } }
  } catch ({ message }) {
    return { httpStatus: 400, json: { message } }
  }
}

const putAuthor = async (req) => {
  try {
    await updateAuthor(req.params.id, req.body, req.authorDbHandler, req.quoteDbHandler)

    return { httpStatus: 200, json: { message: 'Author updated successfully.' } }
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return { httpStatus: code, json: { message } }
  }
}

const deleteAuthor = async (req) => {
  try {
    await removeAuthor(req.params.id, req.authorDbHandler, req.quoteDbHandler)

    return { httpStatus: 200, json: { message: 'Author deleted successfully.' } }
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return { httpStatus: code, json: { message } }
  }
}

module.exports = {
  getAuthor,
  postAuthor,
  putAuthor,
  deleteAuthor
}
