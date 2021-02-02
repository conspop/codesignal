// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
  let pictureWidth = picture[0].length
  topAndBottomFrame = '*'.repeat(pictureWidth + 2)
  let result = []
  result.push(topAndBottomFrame)
  picture.forEach(row => {
    result.push('*'.concat(row, '*'))
  })
  result.push(topAndBottomFrame)
  return result
}

module.exports = addBorder