const { Router } = require('express')

const routes = Router()

const { getAuthor, postAuthor, putAuthor, deleteAuthor } = require('../controllers/authorController')

routes.get('/', getAuthor)
routes.post('/', postAuthor)
routes.put('/:id', putAuthor)
routes.delete('/:id', deleteAuthor)

module.exports = routes
