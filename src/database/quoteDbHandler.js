const QuoteModel = require('./QuoteModel')

const add = async (newQuote) => QuoteModel.create(newQuote)

const list = async () => QuoteModel.find()

const update = async (id, updatedQuote) => QuoteModel.create(id, updatedQuote)

const remove = async (id) => QuoteModel.create(id)

module.exports = Object.freeze({
  add,
  list,
  update,
  remove
})

// Fixing last commit
