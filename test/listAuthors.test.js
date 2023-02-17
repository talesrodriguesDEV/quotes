const listAuthors = require('../src/use-cases/author/listAuthors')
const { authorsMock, dbHandlerMock } = require('./mock')

describe('Testing listAuthors use case', () => {
  it('should list authors successfully', async () => {
    dbHandlerMock.list = jest.fn().mockImplementation(() => authorsMock)

    const authors = await listAuthors(dbHandlerMock)

    expect(authors).toEqual(authorsMock)
  })
})
