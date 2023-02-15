const Author = require('../../entities/Author')

const filterAuthor = require('./filterAuthor')

module.exports = async function addAuthor ({ id, name, age, country }, databaseHandler) {
  const author = await filterAuthor(name, databaseHandler)
  if (author) throw new Error('Author already exists.')

  const rawAuthor = {
    id,
    name,
    age,
    country,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const validAuthor = Author(rawAuthor)

  await databaseHandler.add(validAuthor)
}
