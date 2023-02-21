const Quote = require('../../src/entities/Quote')
const { quoteMock } = require('../mock')

describe('Testing Quote entity', () => {
  it('should throw an Error for missing Quote info', () => {
    expect(() => Quote({})).toThrow('Some quote info is missing.')
  })

  it('should throw an Error for invalid info type', () => {
    expect(() => Quote({ ...quoteMock, id: 1 })).toThrow('Invalid info type.')
  })

  it('should throw an Error for invalid text length', () => {
    expect(() => Quote({ ...quoteMock, text: 'nice text' })).toThrow('Text must have at least 10 characters and maximum 100.')
  })

  it('should throw an Error for invalid author length', () => {
    expect(() => Quote({ ...quoteMock, author: 'au' })).toThrow('Author must have at least 3 characters and maximum 20.')
  })

  it('should throw an Error for invalid text length', () => {
    expect(() => Quote({ ...quoteMock, length: 20 })).toThrow('Invalid quote length.')
  })

  it('should throw an Error for invalid dates', () => {
    expect(() => Quote({ ...quoteMock, updatedAt: new Date('2023-02-15T21:24:12.523Z') })).toThrow('Invalid dates.')
  })

  it('should return an Quote object sucessfully', () => {
    const quote = Quote(quoteMock)

    expect(quote).toEqual(Object.freeze(quoteMock))
  })

  it('should throw an Error when an attempt to change Quote ocurr', () => {
    'use strict'

    const quote = Quote(quoteMock)

    const changeAuthor = () => {
      quote.author = 'Bob'
    }

    expect(changeAuthor).toThrow()
  })
})
