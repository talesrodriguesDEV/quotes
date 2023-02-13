const express = require('express')
const server = express()
server.listen(3001, console.log('Server running.'))

const connectDB = require('./database/connectDB')
connectDB()
