const express = require('express')
const server = express()
server.listen(3001, console.log('Server running.'))
server.use(express.json())

const connectDB = require('./database/connectDB')
connectDB()

// ### Testing below ###
const quoteDbHandler = require('./database/quoteDbHandler')
const addQuote = require('./use-cases/addQuote')
const getQuoteById = require('./use-cases/getQuoteById')
const listQuotes = require('./use-cases/listQuotes')

server.get('/', async (req, res) => {
  const x = await listQuotes(quoteDbHandler)
  res.json(x)
})

server.post('/', async (req, res) => {
  try {
    await addQuote(req.body, quoteDbHandler)
    res.status(201).end()
  } catch (error) {
    res.status(400).json(error.message)
  }
})

server.get('/:id', async (req, res) => {
  const { id } = req.params

  const x = await getQuoteById(id, quoteDbHandler)

  res.status(200).json(x)
})
