const express = require('express')

const dbHandler = require('./middlewares/dbHandler')
const errorHandler = require('./middlewares/errorHandler')

const quoteRoutes = require('./routes/quoteRoutes')
const authorRoutes = require('./routes/authorRoutes')

const server = express()

server.use(express.json())
server.use(dbHandler)
server.use('/quote', quoteRoutes)
server.use('/author', authorRoutes)
server.use(errorHandler)

server.listen(3001, console.log('Server running.'))

// Connecting to Database
const connectDB = require('./database/connectDB')
connectDB()
