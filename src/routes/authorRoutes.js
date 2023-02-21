const { Router } = require('express')

const routes = Router()

const { getAuthor, postAuthor, putAuthor, deleteAuthor } = require('../controllers/authorController')

const adapter = require('./adapter')

routes.get('/', adapter(getAuthor))
routes.post('/', adapter(postAuthor))
routes.put('/:id', adapter(putAuthor))
routes.delete('/:id', adapter(deleteAuthor))

module.exports = routes
