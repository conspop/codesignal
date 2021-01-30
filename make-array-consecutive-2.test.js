const makeArrayConsecutive2 = require('./make-array-consecutive-2')

test('returns number of missing statues', () => {
  expect(makeArrayConsecutive2([6, 2, 3, 8])).toBe(3)
})