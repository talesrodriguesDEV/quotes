const dbHandlerMock = {
  add: jest.fn(),
  list: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
  getById: jest.fn(),
  filter: jest.fn()
}

const authorInfoMock = {
  id: '123',
  name: 'Joe Doe',
  age: 18,
  country: 'USA'
}

const authorMock = {
  ...authorInfoMock,
  createdAt: new Date(),
  updatedAt: new Date()
}

const authorsMock = [
  authorMock,
  {
    id: '321',
    name: 'Foo Bar',
    age: 30,
    country: 'Greece',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  dbHandlerMock,
  authorInfoMock,
  authorMock,
  authorsMock
}
