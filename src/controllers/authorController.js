const listAuthors = require('../use-cases/author/listAuthors')
const addAuthor = require('../use-cases/author/addAuthor')
const updateAuthor = require('../use-cases/author/updateAuthor')
const removeAuthor = require('../use-cases/author/removeAuthor')

const { randomUUID } = require('crypto')

const getAuthor = async ({ authorDbHandler }) => {
  const authors = await listAuthors(authorDbHandler)

  return { httpStatus: 200, json: authors }
}

const postAuthor = async ({ body, authorDbHandler }) => {
  try {
    body.id = randomUUID()
    await addAuthor(body, authorDbHandler)

    return { httpStatus: 201, json: { message: 'Author added successfully.' } }
  } catch ({ message }) {
    return { httpStatus: 400, json: { message } }
  }
}

const putAuthor = async ({ params, body, authorDbHandler, quoteDbHandler }) => {
  try {
    await updateAuthor(params.id, body, authorDbHandler, quoteDbHandler)

    return { httpStatus: 200, json: { message: 'Author updated successfully.' } }
  } catch ({ status, message }) {
    let code = 400
    if (status) code = status

    return { httpStatus: code, json: { message } }
  }
}

const deleteAuthor = async ({ params, body, authorDbHandler, quoteDbHandler }) => {
  try {
    await removeAuthor(params.id, authorDbHandler, quoteDbHandler)

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
