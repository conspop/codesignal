// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
  inputArray.sort((a,b) => b.length - a.length)
  longestStringLength = inputArray[0].length
  return inputArray.filter(string => string.length === longestStringLength)
}


module.exports = allLongestStrings