const { Schema, model } = require('mongoose')

const quoteSchema = new Schema({
  text: String,
  author: String,
  length: Number,
  createdAt: Date,
  updatedAt: Date
}, { id: false })

const QuoteModel = model('Quote', quoteSchema)

module.exports = QuoteModel
