const quoteDbHandler = require('../database/quoteDbHandler')

module.exports = function dbHandler (req, _res, next) {
  req.quoteDbHandler = quoteDbHandler

  next()
}
