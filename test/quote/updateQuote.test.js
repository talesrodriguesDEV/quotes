const updateQuote = require('../../src/use-cases/quote/updateQuote')
const { quoteMock, quoteDbHandlerMock } = require('../mock')

describe('Testing updateQuote use case', () => {
  it('should update quote successfully', async () => {
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => null)
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => quoteMock)

    await updateQuote(quoteMock.id, quoteMock, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.update).toHaveBeenCalledWith(quoteMock.id, quoteMock)
  })

  it('should throw an Error if quote already exists', async () => {
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => quoteMock)

    expect(updateQuote(quoteMock.id, quoteMock, quoteDbHandlerMock)).rejects.toThrow('Quote already exists.')
  })

  it('should throw an Error if no quote text is provided', async () => {
    expect(updateQuote(quoteMock.id, {}, quoteDbHandlerMock)).rejects.toThrow('No quote text was provided.')
  })
})
