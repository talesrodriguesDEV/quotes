const { Router } = require('express')

const routes = Router()

const { getQuote, postQuote, putQuote, deleteQuote } = require('../controllers/quoteController')
const adapter = require('./adapter')

routes.get('/', adapter(getQuote))
routes.post('/', adapter(postQuote))
routes.put('/:id', adapter(putQuote))
routes.delete('/:id', adapter(deleteQuote))

module.exports = routes
