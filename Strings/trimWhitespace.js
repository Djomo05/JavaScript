/**
 * To remove spaces from the leading and the trailing of string we can use the .trim() method.
 *
 * To remove the spaces from the leading only we can use the .trimStart() method.
 *
 * To remove the spaces from the trailing we can use the .trimEnd() method.
 *
 *
 * It's more important to used them especially during comparison.
 * **/

let greeting = "   Hello, world!   ";


let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"


greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "


greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"
