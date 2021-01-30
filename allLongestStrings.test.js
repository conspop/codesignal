const allLongestStrings = require('./allLongestStrings')

test('return all longest strings', () => {
  expect(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])).toEqual(["aba", "vcd", "aba"])
})