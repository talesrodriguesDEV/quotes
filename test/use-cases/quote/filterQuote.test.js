const filterQuote = require('../../../src/use-cases/quote/filterQuote')
const { quoteInfoMock, quoteDbHandlerMock } = require('../../mock')

describe('Testing filterQuote use case', () => {
  it('should filter quote successfully', async () => {
    await filterQuote(quoteInfoMock.text, quoteDbHandlerMock)

    expect(quoteDbHandlerMock.filter).toHaveBeenCalledWith(quoteInfoMock.text)
  })
})
