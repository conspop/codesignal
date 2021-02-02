const addBorder = require('./addBorder')

test('Add border around picture', () => {
  expect(addBorder( ["abc",
                    "ded"]))
  .toEqual( ["*****",
            "*abc*",
            "*ded*",
            "*****"])
})