const quoteDbHandler = require('../database/quote/quoteDbHandler')
const authorDbHandler = require('../database/author/authorDbHandler')

module.exports = function dbHandler (req, _res, next) {
  req.quoteDbHandler = quoteDbHandler
  req.authorDbHandler = authorDbHandler

  next()
}
