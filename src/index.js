
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  const newArr = []
  for (let i = 0; i < matrix.length; i++) {
    if (i%2 == 0) {
      newArr.push(matrix[i])
    } else if (!(i%2 == 0)) {
      let num = matrix[i].reverse()
      newArr.push(num)
    }
  }
  return newArr.flat(Infinity)
}