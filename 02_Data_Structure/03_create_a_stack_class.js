// Create the push and pop method, stacks have other useful methods.
// Let's add a peek, isEmpty, and clear method to our stack class.

function Stack() {
  var collection = []
  this.print = function () {
    console.log(collection)
  }
  // Only change code below this line
  this.push = function (e) {
    collection.push(e)
  }

  this.peek = function () {
    return collection[collection.length - 1]
  }

  this.pop = function () {
    return collection.pop(collection[collection.length - 1])
  }

  this.isEmpty = function () {
    if (collection.length == 0) return true
  }

  this.clear = function () {
    collection.length = 0
  }
  // Only change code above this line
}
