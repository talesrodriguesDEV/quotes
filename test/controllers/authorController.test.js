const { getAuthor, postAuthor, putAuthor, deleteAuthor } = require('../../src/controllers/authorController')
const { authorDbHandlerMock, authorsMock, authorReqMock, authorMock } = require('../mock')

describe('Testing authorController', () => {
  it('should handle a GET request properly', async () => {
    authorDbHandlerMock.list = jest.fn().mockImplementation(() => authorsMock)

    const response = await getAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 200, json: authorsMock })
  })

  it('should handle a POST request properly', async () => {
    const response = await postAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 201, json: { message: 'Author added successfully.' } })
  })

  it('should handle a POST request error', async () => {
    delete authorReqMock.body.country
    const response = await postAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 400, json: { message: 'Some author info is missing.' } })
  })

  it('should handle a PUT request properly', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    const response = await putAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 200, json: { message: 'Author updated successfully.' } })
  })

  it('should handle a PUT request error', async () => {
    authorDbHandlerMock.getById = jest.fn()

    const response = await putAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 404, json: { message: 'Author not found.' } })
  })

  it('should handle a PUT request error II', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)
    authorReqMock.body = {}

    const response = await putAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 400, json: { message: 'No author info was provided.' } })
  })

  it('should handle a DELETE request properly', async () => {
    authorDbHandlerMock.getById = jest.fn().mockImplementation(() => authorMock)

    const response = await deleteAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 200, json: { message: 'Author deleted successfully.' } })
  })

  it('should handle a DELETE request error', async () => {
    authorDbHandlerMock.getById = jest.fn()

    const response = await deleteAuthor(authorReqMock)

    expect(response).toEqual({ httpStatus: 404, json: { message: 'Author not found.' } })
  })
})
