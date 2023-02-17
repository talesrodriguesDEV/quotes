const filterAuthor = require('../src/use-cases/author/filterAuthor')
const { authorInfoMock, dbHandlerMock } = require('./mock')

describe('Testing filterAuthor use case', () => {
  it('should filter author successfully', async () => {
    await filterAuthor(authorInfoMock.name, dbHandlerMock)

    expect(dbHandlerMock.filter).toHaveBeenCalledWith(authorInfoMock.name)
  })
})
