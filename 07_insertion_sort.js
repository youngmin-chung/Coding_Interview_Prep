/*
This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
It continues iterating through the list and swapping new items backwards into the sorted portion 
until it reaches the end. 
This algorithm has quadratic time complexity in the average and worst cases.
*/

function insertionSort(array) {
  // Only change code below this line
  for (var i = 1; i < array.length; i++) {
    var current = array[i]
    var j = i - 1
    while (j >= 0 && current < array[j]) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = current
  }
  return array
  // Only change code above this line
}
console.log(
  insertionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
)
``