const isLucky = require('./isLucky')

test('return whether lucky or not', () => {
  expect(isLucky(1230)).toBe(true)
})

test('return whether lucky or not', () => {
  expect(isLucky(239017)).toBe(false)
})