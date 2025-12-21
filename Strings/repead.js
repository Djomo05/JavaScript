/**
 * The .repeat() method is used to repeat a string "X" number of times
 *
 * The .repeat() method takes one argument ( x ).
 *
 * Constraints:
 *  --> arg must be a positive integer
 *  --> if arg is -1, Infinity, the code will throw a RangeError
 *  --> if the arg is a decimal like ( 2.5 ) that method will round down to the nearest integer
 *
 * **/

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"


word = "Test";
console.log(word.repeat(-1));  // Throws RangeError: Invalid count value

word = "Test";
console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value

word = "Test";
console.log(word.repeat(2.5));  // "TestTest"

word = "Test";
console.log(word.repeat(0));  // ""
