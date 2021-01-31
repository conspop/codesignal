// Write a function that reverses characters in (possibly nested)
//  parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

function reverseInParentheses(inputString) {
  let inputStringArray = inputString.split('')
  while (inputStringArray.findIndex(char => char === '(') >= 0) {
    let opening = inputStringArray.findIndex(char => char === '(')
    for (let i = opening + 1; i < inputStringArray.length; i++ ) {
      if (inputStringArray[i] === '(') {
        opening = i
      }
      if (inputStringArray[i] === ')') {
        let arrayToReverse = inputStringArray.slice(opening + 1, i)
        let reversedArray = arrayToReverse.reverse()
        inputStringArray.splice(opening, i - opening + 1, ...reversedArray)
        break
      }
    }
  }
  return inputStringArray.join('')
}

module.exports = reverseInParentheses