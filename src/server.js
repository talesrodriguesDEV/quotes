const express = require('express')

const dbHandler = require('./middlewares/dbHandler')
const errorHandler = require('./middlewares/errorHandler')

const server = express()

server.use(express.json())
server.use(dbHandler)

const { getController, postController, putController, deleteController } = require('./controllers/quote')

server.get('/', getController)
server.post('/', postController)
server.put('/:id', putController)
server.delete('/:id', deleteController)

server.use(errorHandler)

server.listen(3001, console.log('Server running.'))

// Connecting to Database
const connectDB = require('./database/connectDB')
connectDB()
