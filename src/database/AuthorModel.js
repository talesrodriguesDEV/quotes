const { Schema, model } = require('mongoose')

const authorSchema = new Schema({
  id: String,
  name: String,
  age: Number,
  country: String,
  createdAt: Date,
  updatedAt: Date
})

const Author = model('Author', authorSchema)

module.exports = Author
