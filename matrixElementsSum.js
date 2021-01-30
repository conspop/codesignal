function matrixElementsSum(matrix) {
  haunted = [false, false, false, false]
  let sum = 0
  matrix.forEach(row => {
    row.forEach((room, index) => {
      if (room > 0) {
        if (!haunted[index]) {
          sum += room
        }
      } else {
        haunted[index] = true
      }
    })
  })  
  return sum  
}

module.exports = matrixElementsSum