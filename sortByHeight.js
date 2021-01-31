// Some people are standing in a row in a park. 
// There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights 
// in a non-descending order without moving the trees. 
// People can be very tall!

function sortByHeight(a) {
  let heightsArray = a.filter(thing => thing !== -1)
  heightsArray.sort((a, b) => a - b)
  let placeholderArray = a.map(thing => {
      if (thing === -1) {
          return -1
      } else {
          return 0
      }
  })
  return placeholderArray.map(placeholder => {
      if (placeholder === -1 ) {
          return -1
      } else {
          return heightsArray.shift()
      }
  })
}

module.exports = sortByHeight