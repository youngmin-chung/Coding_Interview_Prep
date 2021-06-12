function quickSort(array, low = 0, high = array.length - 1) {
  // Only change code below this line
  if (low < high) {
    var pi = partition(array, low, high)

    quickSort(array, low, pi - 1)
    quickSort(array, pi + 1, high)
  }
  return array
  // Only change code above this line
}

function swap(array, i, j) {
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function partition(array, low, high) {
  var pivot = array[high]
  var i = low - 1

  for (var j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++
      swap(array, i, j)
    }
  }
  swap(array, i + 1, high)
  return i + 1
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]) )