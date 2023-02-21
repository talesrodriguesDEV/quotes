const { getQuote, postQuote, putQuote, deleteQuote } = require('../../src/controllers/quoteController')
const { quoteDbHandlerMock, quotesMock, quoteReqMock, quoteMock, authorDbHandlerMock, authorMock } = require('../mock')

describe('Testing quoteController', () => {
  it('should handle a GET request properly', async () => {
    quoteDbHandlerMock.list = jest.fn().mockImplementation(() => quotesMock)

    const response = await getQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 200, json: quotesMock })
  })

  it('should handle a POST request properly', async () => {
    authorDbHandlerMock.filter = jest.fn().mockImplementation(() => authorMock)

    const response = await postQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 201, json: { message: 'Quote added successfully.' } })
  })

  it('should handle a POST request error', async () => {
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => quoteMock)

    const response = await postQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 400, json: { message: 'Quote already exists.' } })
  })

  it('should handle a PUT request properly', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => quoteMock)
    quoteDbHandlerMock.filter = jest.fn().mockImplementation(() => null)

    const response = await putQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 200, json: { message: 'Quote updated successfully.' } })
  })

  it('should handle a PUT request error', async () => {
    quoteDbHandlerMock.getById = jest.fn()

    const response = await putQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 404, json: { message: 'Quote not found.' } })
  })

  it('should handle a PUT request error II', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => quoteMock)
    quoteReqMock.body = {}

    const response = await putQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 400, json: { message: 'No quote text was provided.' } })
  })

  it('should handle a DELETE request properly', async () => {
    quoteDbHandlerMock.getById = jest.fn().mockImplementation(() => quoteMock)

    const response = await deleteQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 200, json: { message: 'Quote deleted successfully.' } })
  })

  it('should handle a DELETE request error', async () => {
    quoteDbHandlerMock.getById = jest.fn()

    const response = await deleteQuote(quoteReqMock)

    expect(response).toEqual({ httpStatus: 404, json: { message: 'Quote not found.' } })
  })
})
