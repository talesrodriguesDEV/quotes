module.exports = function age ({ id, name, age, country, createdAt, updatedAt }) {
  const missingInfo = !id || !name || !age || !country || !createdAt || !updatedAt
  if (missingInfo) throw new Error('Some author info is missing.')

  const invalidInfoType =
    typeof id !== 'string' ||
    typeof name !== 'string' ||
    typeof age !== 'number' ||
    typeof country !== 'string' ||
    !(createdAt instanceof Date) ||
    !(updatedAt instanceof Date)
  if (invalidInfoType) throw new Error('Invalid info type.')

  if (name.length > 20 || name.length < 3) throw new Error('Name must have at least 3 characters and maximum 20.')

  if (age < 18) throw new Error('Authors must be at least 18 years old.')

  if (country.length > 10 || country.length < 3) throw new Error('Country must have at least 3 characters and maximum 10.')

  if (createdAt > updatedAt) throw new Error('Invalid dates.')

  return Object.freeze({
    id,
    name,
    age,
    country,
    createdAt,
    updatedAt
  })
}
