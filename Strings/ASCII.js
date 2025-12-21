/**
 * The ASCII short for "American Standard Code for Information Interchange"
 *
 * It's a standard widely used that allows a computer to map string to numerical value.
 *
 * To determine the ASCII code for a character we can use the .charCodeAt() method
 *
 * The reverse method that enable us to get the character through ASCII code is .fromCharCode()
 * **/

let letter = "A";
console.log(letter.charCodeAt(0));  // 65

let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33

let char = String.fromCharCode(65);
console.log(char);  //  A

char = String.fromCharCode(97);
console.log(char);  // a
