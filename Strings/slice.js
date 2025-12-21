/**
 * To extract a portion of a sequence of strings, we can use the .slice() method.
 *
 * The .slice() method takes two params:
 *  --> The first param is the starting position ( required )
 *  --> The second param is the ending position  ( optional ).
 *
 * During the execution, if the second param isn't provided, the .slice() method will
 * extract from the first index provided by the user to last character of the string.
 *
 * the .slice's params can be positive or negative.
 *
 * NB: if the params are negative the .slice() method will extract the portion backward
 * (from the right to the left)
 *
 * NB: If the second parameter is provided, the .slice() method won’t reach that last position.
 * It will stop at the position just before it.
 *
 * **/

let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello


message = "JavaScript is fun!";
lastWord = message.slice(-4);

console.log(lastWord);  // fun!


message = "I love JavaScript!";
let language = message.slice(7, 17);

console.log(language);  // JavaScript
