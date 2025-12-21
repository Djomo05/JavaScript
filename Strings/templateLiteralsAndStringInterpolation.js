/**
 * Template litteral is used to:
 *
 *  ---> Easily embed variables within a string.
 *  ---> Allow to write a string across multilines and the formatting is preserved.
 *  ---> Allow to embed Javascript expression directly within the string.
 *
 *
 * **/


// Here's an example of a template literal:
let name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);


// Here is an example using string concatenation and the plus (+) operator:
let firstName = "Alice";
let age = 25;
let message = "My firstName is " + firstName + " and I am " + age + " years old.";
console.log(message);

// And here is an example using template literals and string interpolation:
firstName = "Alice";
age = 25;
message = `My firstName is ${firstName} and I am ${age} years old.`;
console.log(message);

// Here's an exemple of writing strings across multilines.
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);


// Here's an exemple of using Javascript expression directly in template litteral ( string interpolation )
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
    (score / highestScore) * 100
}%.`;
console.log(output);


