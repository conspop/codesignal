function makeArrayConsecutive2(statues) {
  let missingStatues = 0
  for (let i = Math.min(...statues); i < Math.max(...statues); i++) {
    if (!statues.includes(i)) {
        missingStatues ++
    }
  }
  return missingStatues
}

module.exports = makeArrayConsecutive2