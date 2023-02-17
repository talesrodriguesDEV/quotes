const Author = require('../src/entities/Author')

const mockAuthor = { id: '1', name: 'name', age: 21, country: 'country', createdAt: new Date(), updatedAt: new Date() }

describe('Testing Author entity', () => {
  it('should throw an Error for missing Author info', () => {
    expect(() => Author({})).toThrow('Some author info is missing.')
  })

  it('should throw an Error for invalid info type', () => {
    expect(() => Author({ ...mockAuthor, createdAt: 1 })).toThrow('Invalid info type.')
  })

  it('should throw an Error for invalid name length', () => {
    expect(() => Author({ ...mockAuthor, name: 'Ta' })).toThrow('Name must have at least 3 characters and maximum 20.')
  })

  it('should throw an Error for invalid author age', () => {
    expect(() => Author({ ...mockAuthor, age: 17 })).toThrow('Authors must be at least 18 years old.')
  })

  it('should throw an Error for invalid country length', () => {
    expect(() => Author({ ...mockAuthor, country: 'United States of America' })).toThrow('Country must have at least 3 characters and maximum 10.')
  })

  it('should throw an Error for invalid dates', () => {
    expect(() => Author({ ...mockAuthor, updatedAt: new Date('2023-02-15T21:24:12.523Z') })).toThrow('Invalid dates.')
  })

  it('should return an Author object sucessfully', () => {
    const author = Author(mockAuthor)

    expect(author).toEqual(Object.freeze(mockAuthor))
  })

  it('should throw an Error when an attempt to change Author ocurr', () => {
    'use strict'

    const author = Author(mockAuthor)

    const changeCountry = () => {
      author.country = 'a'
    }

    expect(changeCountry).toThrow()
  })
})
