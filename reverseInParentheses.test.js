const reverseInParentheses = require('./reverseInParentheses')

test('Returns string with part in parentheses reversed', () => {
  expect(reverseInParentheses("(bar)"))
  .toBe("rab")
})

test('Returns string with part in parentheses reversed', () => {
  expect(reverseInParentheses("foo(bar)baz"))
  .toBe("foorabbaz")
})

test('Returns string with part in parentheses reversed', () => {
  expect(reverseInParentheses("foo(bar)baz(blim)"))
  .toBe("foorabbazmilb")
})

test('Returns string with part in parentheses reversed', () => {
  expect(reverseInParentheses("foo(bar(baz))blim"))
  .toBe("foobazrabblim")
})

test('Returns string with part in parentheses reversed', () => {
  expect(reverseInParentheses("(bar)"))
  .toBe("rab")
})