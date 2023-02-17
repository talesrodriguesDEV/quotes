const getAuthorById = require('../../src/use-cases/author/getAuthorById')
const { authorInfoMock, authorMock, authorDbHandlerMock } = require('../mock')

describe('Testing getAuthorById use case', () => {
  it('should get author successfully', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    const author = await getAuthorById(authorInfoMock.id, authorDbHandlerMock)

    expect(authorDbHandlerMock.getById).toHaveBeenCalledWith(authorInfoMock.id)
    expect(author).toEqual(authorMock)
  })

  it('should throw an Error if author is not found', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => null)

    let error
    try {
      await getAuthorById(authorInfoMock.id, authorDbHandlerMock)
    } catch (err) {
      error = err
    }

    expect(error).toEqual({ status: 404, message: 'Author not found.' })
  })
})
