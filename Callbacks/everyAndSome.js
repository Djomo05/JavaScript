/**
 * When you're working with arrays in JavaScript, there are often times when you want to check
 * if all elements in an array meet a certain condition, or if at least one element meets a condition.
 * **/


// Here's an example to illustrate how every() works:
const numbers = [2, 4, 6, 8, 10];
const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);

console.log(hasAllEvenNumbers); // true

// Here's an example of how some() works:
const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers); // true
