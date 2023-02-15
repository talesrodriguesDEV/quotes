const Author = require('../../entities/Author')

const filterAuthor = require('./filterAuthor')

module.exports = async ({ id, name, age, country }, authorDbHandler) => {
  const author = await filterAuthor(name, authorDbHandler)
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

  await authorDbHandler.add(validAuthor)
}
