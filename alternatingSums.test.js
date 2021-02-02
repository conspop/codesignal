const alternatingSums = require('./alternatingSums')

test('return sums of each teams weights in an array', () => {
  expect(alternatingSums([50, 60, 60, 45, 70]))
  .toEqual([180, 105])
})