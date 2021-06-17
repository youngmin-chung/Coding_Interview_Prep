// Q. First create a buffer that is 64-bytes. 
//    Then create a Int32Array typed array with a view of it called i32View.
var byteSize = 64;
var buffer = new ArrayBuffer(byteSize)
var i32View = new Int32Array(buffer)
console.log(i32View)