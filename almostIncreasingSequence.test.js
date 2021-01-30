const almostIncreasingSequence = require('./almostIncreasingSequence')

test('return whether almost increasing sequence', () => {
  expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false)
})

test('return whether almost increasing sequence', () => {
  expect(almostIncreasingSequence([1, 3, 2])).toBe(true)
})

test('return whether almost increasing sequence', () => {
  expect(almostIncreasingSequence([0, -2, 5, 6])).toBe(true)
})

test('return whether almost increasing sequence', () => {
  expect(almostIncreasingSequence([1, 2, 1, 2])).toBe(true)
})

