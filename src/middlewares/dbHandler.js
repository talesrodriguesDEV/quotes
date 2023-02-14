const quoteDbHandler = require('../database/quote/quoteDbHandler')

module.exports = function dbHandler (req, _res, next) {
  req.quoteDbHandler = quoteDbHandler

  next()
}
