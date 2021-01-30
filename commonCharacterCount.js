// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  let commonCharacters = 0
  let s1Array = s1.split('')
  let s2Array = s2.split('')
  s1Array.forEach(s1Letter => {
    let matchIndex = s2Array.findIndex(s2Letter => s2Letter === s1Letter)
    if (matchIndex >= 0) {
      let match = s2Array.splice(matchIndex, 1)
      if (match.length > 0) {commonCharacters ++}
    }
  })
  return commonCharacters
}

module.exports = commonCharacterCount