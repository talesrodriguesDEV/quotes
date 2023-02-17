const addQuote = require('../../src/use-cases/quote/addQuote')
const { quoteDbHandlerMock, quoteInfoMock, authorDbHandlerMock, authorMock, quoteMock } = require('../mock')

describe('Testing addQuote use case', () => {
  it('should add a quote successfully', async () => {
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => null)
    authorDbHandlerMock.filter = jest.fn().mockImplementation(() => authorMock)

    await addQuote(quoteInfoMock, quoteDbHandlerMock, authorDbHandlerMock)

    const mockQuoteObject = {
      ...quoteInfoMock,
      length: quoteInfoMock.text.length,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    expect(quoteDbHandlerMock.add).toHaveBeenCalledWith(mockQuoteObject)
  })

  it('should throw and Error if quote already exists', async () => {
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => quoteMock)
    authorDbHandlerMock.filter = jest.fn().mockImplementation(() => authorMock)

    expect(addQuote(quoteInfoMock, quoteDbHandlerMock, authorDbHandlerMock)).rejects.toThrow('Quote already exists.')
  })

  it('should throw and Error if author doesn\'t exist', () => {
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => null)
    authorDbHandlerMock.filter = jest.fn().mockImplementation(() => null)

    expect(addQuote(quoteInfoMock, quoteDbHandlerMock, authorDbHandlerMock)).rejects.toThrow('Author doesn\'t exist.')
  })
})
