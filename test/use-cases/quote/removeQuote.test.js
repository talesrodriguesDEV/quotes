const removeQuote = require('../../../src/use-cases/quote/removeQuote')
const { quoteMock, quoteDbHandlerMock } = require('../../mock')

describe('Testing removeQuote use case', () => {
  it('should remove quote successfully', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => quoteMock)

    await removeQuote(quoteMock.id, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.remove).toHaveBeenCalledWith(quoteMock.id)
  })

  it('should throw an Error if quote is not found', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => null)

    let error
    try {
      await removeQuote(quoteMock.id, quoteDbHandlerMock)
    } catch (err) {
      error = err
    }

    expect(error).toEqual({ status: 404, message: 'Quote not found.' })
  })
})
