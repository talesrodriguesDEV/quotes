const { Schema, model } = require('mongoose')

const quoteSchema = new Schema({
  id: String,
  text: String,
  author: String,
  length: Number,
  createdAt: Date,
  updatedAt: Date
})

const QuoteModel = model('Quote', quoteSchema)

module.exports = QuoteModel

// Fixing last commit
