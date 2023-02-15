const mongoose = require('mongoose')

const MONGO_PORT = 27017

module.exports = () => {
  mongoose.set('strictQuery', false)

  mongoose.connect(`mongodb://mongo:${MONGO_PORT}`, { user: 'root', pass: 'example' })
  const db = mongoose.connection

  db.once('open', () => console.log('Database connected.'))
  db.on('error', (err) => console.log(err))
}
