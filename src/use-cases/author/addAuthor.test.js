const addAuthor = require('./addAuthor')

const mockAuthorInfo = {
  id: '123',
  name: 'Joe Doe',
  age: 18,
  country: 'USA'
}

const dbHandlerMock = {
  add: jest.fn(),
  list: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
  getById: jest.fn(),
  filter: jest.fn().mockImplementation(() => false)
}

describe('Testing add author feature', () => {
  it('should add an author successfully', async () => {
    await addAuthor(mockAuthorInfo, dbHandlerMock)

    const mockAuthorObject = {
      ...mockAuthorInfo,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    expect(dbHandlerMock.add).toHaveBeenCalledWith(mockAuthorObject)
  })

  it('should throw an Error if author already exists', () => {
    dbHandlerMock.filter = jest.fn().mockImplementation(() => true)
    expect(addAuthor(mockAuthorInfo, dbHandlerMock)).rejects.toThrow('Author already exists.')
  })
})
