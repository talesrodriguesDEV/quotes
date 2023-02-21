const filterAuthor = require('../../../src/use-cases/author/filterAuthor')
const { authorInfoMock, authorDbHandlerMock } = require('../../mock')

describe('Testing filterAuthor use case', () => {
  it('should filter author successfully', async () => {
    await filterAuthor(authorInfoMock.name, authorDbHandlerMock)

    expect(authorDbHandlerMock.filter).toHaveBeenCalledWith(authorInfoMock.name)
  })
})
