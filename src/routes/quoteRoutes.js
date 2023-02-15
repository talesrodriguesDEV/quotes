const { Router } = require('express')

const routes = Router()

const { getQuote, postQuote, putQuote, deleteQuote } = require('../controllers/quoteController')

routes.get('/', getQuote)
routes.post('/', postQuote)
routes.put('/:id', putQuote)
routes.delete('/:id', deleteQuote)

module.exports = routes
