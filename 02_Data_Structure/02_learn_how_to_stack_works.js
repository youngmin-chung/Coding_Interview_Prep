// What is stack in real life? 
// ex. stack of books on my table / undo feature of a text editor
// topmost book in the stack was the one that was pu there last.
// That's an example of "LIFO(Last In First Out)"

/* Q. 
Here we have a stack of homework assignments represented as an array: 
 "BIO12" is at the base, and "PSY44" is at the top of the stack.
Modify the given array and treat it like a stack using the JavaScript methods mentioned above. 
Remove the top element "PSY44" from the stack. Then add "CS50" to be the new top element of the stack.
*/

var homeworkStack = ['BIO12', 'HIS80', 'MAT122', 'PSY44']
// Only change code below this line
homeworkStack.pop()
homeworkStack.push('CS50')
console.log(homeworkStack)