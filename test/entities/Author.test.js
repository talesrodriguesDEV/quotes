const Author = require('../../src/entities/Author')
const { authorMock } = require('../mock')

describe('Testing Author entity', () => {
  it('should throw an Error for missing Author info', () => {
    expect(() => Author({})).toThrow('Some author info is missing.')
  })

  it('should throw an Error for invalid info type', () => {
    expect(() => Author({ ...authorMock, createdAt: 1 })).toThrow('Invalid info type.')
  })

  it('should throw an Error for invalid name length', () => {
    expect(() => Author({ ...authorMock, name: 'Ta' })).toThrow('Name must have at least 3 characters and maximum 20.')
  })

  it('should throw an Error for invalid author age', () => {
    expect(() => Author({ ...authorMock, age: 17 })).toThrow('Authors must be at least 18 years old.')
  })

  it('should throw an Error for invalid country length', () => {
    expect(() => Author({ ...authorMock, country: 'United States of America' })).toThrow('Country must have at least 3 characters and maximum 10.')
  })

  it('should throw an Error for invalid dates', () => {
    expect(() => Author({ ...authorMock, updatedAt: new Date('2023-02-15T21:24:12.523Z') })).toThrow('Invalid dates.')
  })

  it('should return an Author object sucessfully', () => {
    const author = Author(authorMock)

    expect(author).toEqual(Object.freeze(authorMock))
  })

  it('should throw an Error when an attempt to change Author ocurr', () => {
    'use strict'

    const author = Author(authorMock)

    const changeCountry = () => {
      author.country = 'a'
    }

    expect(changeCountry).toThrow()
  })
})
