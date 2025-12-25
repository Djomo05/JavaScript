/**
 * In JavaScript, a callback function is a function that is passed as an argument to another function,
 * so that the outer function can invoke it at a specific point.
 * **/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
    console.log(`Element ${number} is at index ${index} in array ${array}`);
});
