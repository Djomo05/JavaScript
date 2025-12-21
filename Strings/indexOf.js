/**
 * To find a substring in a sentence we can use the method .indexOf
 *
 * That method takes two argument, the first is the name of the substring we want to
 * find within the string and the second is optional it defines the starting position
 * of the searching.
 *
 * If the substring exist:
 *  ----> it returns the first letter of that substring
 * If the substring doesn't exist:
 *  ----> it returns -1.
 *
 *  NB: the first argument of the .indexOf method is case-sensitive.
 *
 * **/

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14

sentence = "JavaScript is awesome!";
position = sentence.indexOf("fantastic");
console.log(position); // -1

sentence = "JavaScript is awesome, and JavaScript is powerful!";
position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27

console.log("freeCodeCamp".indexOf("F")) // -1