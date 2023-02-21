const authorDbHandlerMock = {
  add: jest.fn(),
  list: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
  getById: jest.fn(),
  filter: jest.fn()
}

const quoteDbHandlerMock = {
  ...authorDbHandlerMock,
  removeByAuthor: jest.fn(),
  updateQuotesAuthor: jest.fn()
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

const quoteInfoMock = {
  id: '456',
  text: 'What a great quote!',
  author: 'Joe Doe'
}

const quoteMock = {
  ...quoteInfoMock,
  length: quoteInfoMock.text.length,
  createdAt: new Date(),
  updatedAt: new Date()
}

const quotesMock = [
  quoteMock,
  {
    id: '654',
    text: 'Another amazing quote!',
    author: 'Joe Doe',
    length: 22,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  authorDbHandlerMock,
  authorInfoMock,
  authorMock,
  authorsMock,
  quoteDbHandlerMock,
  quoteInfoMock,
  quoteMock,
  quotesMock
}
