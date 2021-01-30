const matrixElementsSum = require('./matrixElementsSum')

test('returns sum of rooms', () => {
  expect(matrixElementsSum([[0, 1, 1, 2], 
                            [0, 5, 0, 0], 
                            [2, 0, 3, 3]])).toBe(9)
})

test('returns sum of rooms', () => {
  expect(matrixElementsSum([[1, 1, 1, 0], 
                            [0, 5, 0, 1], 
                            [2, 1, 3, 10]])).toBe(9)
})