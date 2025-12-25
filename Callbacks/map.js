/**
 * The map method is a powerful and widely used function in JavaScript that operates on arrays.
 * It is designed to create a new array by applying a given function to each element of the original array.
 *
 * **/

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
