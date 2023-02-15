const quoteDbHandler = require('../database/quoteDbHandler')
const authorDbHandler = require('../database/authorDbHandler')

module.exports = function dbHandler (req, _res, next) {
  req.quoteDbHandler = quoteDbHandler
  req.authorDbHandler = authorDbHandler

  next()
}
