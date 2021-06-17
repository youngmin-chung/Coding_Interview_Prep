/*
Write a 'dequeue' method that removes and returns the front element, 
      a 'front' method that lets us see the front element, 
      a 'size' method that shows the length, 
      an 'isEmpty' method to check if the queue is empty.
*/

function Queue() {
  var collection = []
  this.print = function () {
    console.log(collection)
  }
  // Only change code below this line
  this.enqueue = function (e) {
    collection.push(e)
  }
  this.dequeue = function () {
    return collection.shift()
  }

  this.front = function () {
    return collection[0]
  }

  this.size = function () {
    return collection.length
  }

  this.isEmpty = function () {
    return (collection.length = 0)
  }
  // Only change code above this line
}
