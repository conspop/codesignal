// Given a sequence of integers as an array,
// determine whether it is possible to obtain a
// strictly increasing sequence by removing no more 
// than one element from the array.

function almostIncreasingSequence(sequence) {
  let bad = 0
  let index = 1
  let lowest
  while (bad < 2 && index < sequence.length) {
      if (sequence[index] <= sequence[index - 1] || sequence[index] <= lowest) {
          bad++
          if (sequence[index] > sequence[index - 2] && sequence[index] < sequence[index + 1]) {
              lowest = sequence[index]
          }
      } else {
          lowest = sequence[index]
      }
    index++
  }
  return bad < 2
}

module.exports = almostIncreasingSequence