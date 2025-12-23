/**
 * Array destructuring is a feature in JavaScript that allows you to extract values from arrays
 * and assign them to variables in a more concise and readable way. It provides a convenient syntax
 * for unpacking array elements into distinct variables.
 * **/
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"

// Array destructuring also allows you to skip elements you're
// not interested in by using commas. For instance:
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"

/**
 * Another powerful feature of array destructuring is the ability to use default values.
 * If the array has fewer elements than the variables you're trying to assign, you can provide
 * default values:
 * **/

let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

/**
 * Now, let's discuss the rest syntax, denoted by three dots (...). It allows you to capture the
 * remaining elements of an array that haven’t been destructured into a new array. Here's how it works:
 * **/
fruits = ["apple", "banana", "orange", "mango", "kiwi"];
[first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
