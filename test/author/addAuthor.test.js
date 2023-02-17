const addAuthor = require('../../src/use-cases/author/addAuthor')
const { authorInfoMock, authorDbHandlerMock } = require('../mock')

describe('Testing addAuthor use case', () => {
  it('should add an author successfully', async () => {
    authorDbHandlerMock.filter = jest.fn().mockImplementation(() => null)

    await addAuthor(authorInfoMock, authorDbHandlerMock)

    const mockAuthorObject = {
      ...authorInfoMock,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    expect(authorDbHandlerMock.add).toHaveBeenCalledWith(mockAuthorObject)
  })

  it('should throw an Error if author already exists', () => {
    authorDbHandlerMock.filter = jest.fn().mockImplementation(() => true)

    expect(addAuthor(authorInfoMock, authorDbHandlerMock)).rejects.toThrow('Author already exists.')
  })
})
