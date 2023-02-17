const authorInfoMock = {
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
  filter: jest.fn()
}

module.exports = {
  authorInfoMock,
  dbHandlerMock
}
