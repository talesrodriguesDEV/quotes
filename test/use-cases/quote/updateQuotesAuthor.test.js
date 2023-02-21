const updateQuotesAuthor = require('../../../src/use-cases/quote/updateQuotesAuthor')
const { quoteMock, quoteDbHandlerMock } = require('../../mock')

describe('Testing updateQuotesAuthor use case', () => {
  it('should quotes author successfully', async () => {
    await updateQuotesAuthor(quoteMock.author, quoteMock.author, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.updateQuotesAuthor).toHaveBeenCalledWith(quoteMock.author, quoteMock.author)
  })
})
