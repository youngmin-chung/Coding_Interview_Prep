/* 
 Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 

 It then starts at the second position, selects the smallest value in the remaining list, and 
 swaps it with the second element. 
 
 It continues iterating through the list and swapping elements until it reaches the end of the list. 
 
 Now the list is sorted. 

 Selection sort has quadratic time complexity in all cases.
*/

function selectionSort(array) {
  // Only change code below this line
  for (var i = 0; i < array.length; i++) {
    var min = array[i]
    var minId = i
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j]
        minId = j
      }
    }
    var tmp = array[i]
    array[i] = min
    array[minId] = tmp
  }
  return array
  // Only change code above this line
}

console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
)
