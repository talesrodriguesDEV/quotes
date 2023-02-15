module.exports = ({ id, text, author, length, createdAt, updatedAt }) => {
  const missingInfo = !id || !text || !author || !length || !createdAt || !updatedAt
  if (missingInfo) throw new Error('Some quote info is missing.')

  const invalidInfoType =
    typeof id !== 'string' ||
    typeof text !== 'string' ||
    typeof author !== 'string' ||
    typeof length !== 'number' ||
    !(createdAt instanceof Date) ||
    !(updatedAt instanceof Date)
  if (invalidInfoType) throw new Error('Invalid info type.')

  if (text.length > 100 || text.length < 10) throw new Error('Text must have at least 10 characters and maximum 100.')

  if (author.length > 20 || author.length < 3) throw new Error('Author must have at least 3 characters and maximum 20.')

  if (text.length !== length) throw new Error('Invalid quote length.')

  if (createdAt > updatedAt) throw new Error('Invalid dates.')

  return Object.freeze({
    id,
    text,
    author,
    length,
    createdAt,
    updatedAt
  })
}
