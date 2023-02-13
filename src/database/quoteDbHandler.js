const QuoteModel = require('./QuoteModel')

const add = async (newQuote) => QuoteModel.create(newQuote)

const list = async () => QuoteModel.find()

const update = async (id, updates) => QuoteModel.updateOne({ id }, updates)

const remove = async (id) => QuoteModel.deleteOne({ id })

const getById = async (id) => QuoteModel.find({ id })

module.exports = Object.freeze({
  add,
  list,
  update,
  remove,
  getById
})
