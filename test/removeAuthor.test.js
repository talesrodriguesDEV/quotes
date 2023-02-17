const removeAuthor = require('../src/use-cases/author/removeAuthor')
const { authorMock, authorDbHandlerMock, quoteDbHandlerMock } = require('./mock')

describe('Testing removeAuthor use case', () => {
  it('should remove author successfully', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    await removeAuthor(authorMock.id, authorDbHandlerMock, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.removeByAuthor).toHaveBeenCalledWith(authorMock.name)
    expect(authorDbHandlerMock.remove).toHaveBeenCalledWith(authorMock.id)
  })

  it('should throw an Error if author is not found', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => null)

    let error
    try {
      await removeAuthor(authorMock.id, authorDbHandlerMock, quoteDbHandlerMock)
    } catch (err) {
      error = err
    }

    expect(error).toEqual({ status: 404, message: 'Author not found.' })
  })
})
