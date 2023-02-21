const updateAuthor = require('../../../src/use-cases/author/updateAuthor')
const { authorMock, authorDbHandlerMock, quoteDbHandlerMock } = require('../../mock')

describe('Testing updateAuthor use case', () => {
  it('should update author successfully', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    await updateAuthor(authorMock.id, authorMock, authorDbHandlerMock, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.updateQuotesAuthor).toHaveBeenCalledWith(authorMock.name, authorMock.name)
    expect(authorDbHandlerMock.update).toHaveBeenCalledWith(authorMock.id, authorMock)
  })

  it('should throw an Error if author is not found', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => null)

    let error
    try {
      await updateAuthor(authorMock.id, authorDbHandlerMock, quoteDbHandlerMock)
    } catch (err) {
      error = err
    }

    expect(error).toEqual({ status: 404, message: 'Author not found.' })
  })

  it('should throw an Error if no author info is provided', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    expect(updateAuthor(authorMock.id, {}, authorDbHandlerMock, quoteDbHandlerMock)).rejects.toThrow('No author info was provided.')
  })
})
