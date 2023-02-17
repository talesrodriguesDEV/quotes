const addAuthor = require('../src/use-cases/author/addAuthor')
const { authorInfoMock, dbHandlerMock } = require('./mock')

describe('Testing addAuthor use case', () => {
  it('should add an author successfully', async () => {
    dbHandlerMock.filter = jest.fn().mockImplementation(() => false)

    await addAuthor(authorInfoMock, dbHandlerMock)

    const mockAuthorObject = {
      ...authorInfoMock,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    expect(dbHandlerMock.add).toHaveBeenCalledWith(mockAuthorObject)
  })

  it('should throw an Error if author already exists', () => {
    dbHandlerMock.filter = jest.fn().mockImplementation(() => true)

    expect(addAuthor(authorInfoMock, dbHandlerMock)).rejects.toThrow('Author already exists.')
  })
})
