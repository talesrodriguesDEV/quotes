const getAuthorById = require('../src/use-cases/author/getAuthorById')
const { authorInfoMock, authorMock, dbHandlerMock } = require('./mock')

describe('Testing getAuthorById use case', () => {
  it('should get author successfully', async () => {
    dbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    const author = await getAuthorById(authorInfoMock.id, dbHandlerMock)

    expect(dbHandlerMock.getById).toHaveBeenCalledWith(authorInfoMock.id)
    expect(author).toEqual(authorMock)
  })

  it('should throw an Error if author is not found', async () => {
    dbHandlerMock.getById = jest.fn().mockImplementation(() => null)

    let error
    try {
      await getAuthorById(authorInfoMock.id, dbHandlerMock)
    } catch (err) {
      error = err
    }

    expect(error).toEqual({ status: 404, message: 'Author not found.' })
  })
})
