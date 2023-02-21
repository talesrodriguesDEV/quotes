const listQuotes = require('../../../src/use-cases/quote/listQuotes')
const { quotesMock, quoteDbHandlerMock } = require('../../mock')

describe('Testing listQuotes use case', () => {
  it('should list quotes successfully', async () => {
    quoteDbHandlerMock.list = jest.fn().mockImplementation(() => quotesMock)

    const quotes = await listQuotes(quoteDbHandlerMock)

    expect(quotes).toEqual(quotesMock)
  })
})
