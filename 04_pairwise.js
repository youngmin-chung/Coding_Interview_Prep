function pairwise(arr, arg) {
  var sum = 0,
    res = 0
  let pairIndices = []
  function multiple(num) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[num] + arr[i] == arg) {
        if (
          num !== i &&
          !pairIndices.includes(i) &&
          !pairIndices.includes(num)
        ) {
          sum = num + i
          pairIndices.push(num, i)
          break
        }
      }
    }
    return sum
  }

  for (var i = 0; i < arr.length; i++) {
    multiple(i)
  }

  return pairIndices.reduce((sum, curr, index) => sum + curr, 0)
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
