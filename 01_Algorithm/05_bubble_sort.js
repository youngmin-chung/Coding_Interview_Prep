/*
The bubble sort method starts at the beginning of an unsorted array and 
'bubbles up' unsorted values towards the end, iterating through the array 
until it is completely sorted. 

It does this by comparing adjacent items and swapping them if they are out of order. 

The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and 
worst cases has quadratic time complexity. 

While simple, it is usually impractical in most situations.
*/

function bubbleSort(array) {
  // Only change code below this line
  var sorted = false
  var temp
  while (!sorted) {
    sorted = true
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        sorted = false
      }
    }
  }
  return array
  // Only change code above this line
}

console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
)
