const commonCharacterCount = require('./commonCharacterCount')

test('return number of common characters', () => {
  expect(commonCharacterCount("aabcc", "adcaa")).toBe(3)
})