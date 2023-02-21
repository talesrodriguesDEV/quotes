const listAuthors = require('../../../src/use-cases/author/listAuthors')
const { authorsMock, authorDbHandlerMock } = require('../../mock')

describe('Testing listAuthors use case', () => {
  it('should list authors successfully', async () => {
    authorDbHandlerMock.list = jest.fn().mockImplementation(() => authorsMock)

    const authors = await listAuthors(authorDbHandlerMock)

    expect(authors).toEqual(authorsMock)
  })
})
