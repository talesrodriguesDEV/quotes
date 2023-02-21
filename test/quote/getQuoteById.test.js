const getQuoteById = require('../../src/use-cases/quote/getQuoteById')
const { quoteInfoMock, quoteMock, quoteDbHandlerMock } = require('../mock')

describe('Testing getQuoteById use case', () => {
  it('should get quote successfully', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => quoteMock)

    const quote = await getQuoteById(quoteInfoMock.id, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.getById).toHaveBeenCalledWith(quoteInfoMock.id)
    expect(quote).toEqual(quoteMock)
  })

  it('should throw an Error if quote is not found', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => null)

    let error
    try {
      await getQuoteById(quoteInfoMock.id, quoteDbHandlerMock)
    } catch (err) {
      error = err
    }

    expect(error).toEqual({ status: 404, message: 'Quote not found.' })
  })
})
