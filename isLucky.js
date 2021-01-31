// Ticket numbers usually consist of an even number of digits. 
// A ticket number is considered lucky if the sum of the first 
// half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  let array = n.toString().split('').map(string => parseInt(string))
  let halfwayPoint = array.length / 2
  return sum(array.slice(0, halfwayPoint)) === sum(array.slice(halfwayPoint))
}

function sum(array) {
  let sum = 0
  array.forEach(number => {sum += number})
  return sum
}

module.exports = isLucky

