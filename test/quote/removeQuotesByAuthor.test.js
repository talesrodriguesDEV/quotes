const removeQuotesByAuthor = require('../../src/use-cases/quote/removeQuotesByAuthor')
const { quoteMock, quoteDbHandlerMock } = require('../mock')

describe('Testing removeQuotesByAuthor use case', () => {
  it('should remove quote successfully', async () => {
    await removeQuotesByAuthor(quoteMock.author, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.removeByAuthor).toHaveBeenCalledWith(quoteMock.author)
  })
})
