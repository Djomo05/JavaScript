/**
 * To check if a substring exist in a string we can use the .includes() method.
 *
 * It takes two params.
 *  --> The first param is substring that we want to search.
 *  --> The second param is the position at which we want to check if the substring starts
 *
 * The .includes() method returns either "true" or "false"
 *
 * NB: the .includes() method is case-sensitive
 * **/

let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true


phrase = "JavaScript is awesome!";
result = phrase.includes("Awesome");

console.log(result);  // false


text = "Hello, JavaScript world!";
result = text.includes("JavaScript", 7);

console.log(result);  // true
