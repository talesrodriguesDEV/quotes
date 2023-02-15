const AuthorModel = require('./AuthorModel')

const add = async (newAuthor) => AuthorModel.create(newAuthor)

const list = async () => AuthorModel.find()

const update = async (id, updatedAuthor) => AuthorModel.updateOne({ id }, updatedAuthor)

const remove = async (id) => AuthorModel.deleteOne({ id })

const getById = async (id) => AuthorModel.findOne({ id })

const filter = async (name) => AuthorModel.findOne({ name })

module.exports = Object.freeze({
  add,
  list,
  update,
  remove,
  getById,
  filter
})
